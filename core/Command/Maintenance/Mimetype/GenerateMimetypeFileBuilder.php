<?php
declare(strict_types=1);
/**
 * @copyright Copyright (c) 2019 Xheni Myrtaj <xheni@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OC\Core\Command\Maintenance\Mimetype;


class GenerateMimetypeFileBuilder
{
	/**
	 * Generate mime type list file
	 * @param $aliases
	 * @return string
	 */
	public function generateFile(array $aliases): string {
		// Remove comments
		$keys = array_filter(array_keys($aliases), function($k) {
			return $k[0] === '_';
		});
		foreach($keys as $key) {
			unset($aliases[$key]);
		}

		// Fetch all files
		$dir = new \DirectoryIterator(\OC::$SERVERROOT.'/core/img/filetypes');

		$files = [];
		foreach($dir as $fileInfo) {
			if ($fileInfo->isFile()) {
				$file = preg_replace('/.[^.]*$/', '', $fileInfo->getFilename());
				$files[] = $file;
			}
		}

		//Remove duplicates
		$files = array_values(array_unique($files));
		sort($files);

		// Fetch all themes!
		$themes = [];
		$dirs = new \DirectoryIterator(\OC::$SERVERROOT.'/themes/');
		foreach($dirs as $dir) {
			//Valid theme dir
			if ($dir->isFile() || $dir->isDot()) {
				continue;
			}

			$theme = $dir->getFilename();
			$themeDir = $dir->getPath() . '/' . $theme . '/core/img/filetypes/';
			// Check if this theme has its own filetype icons
			if (!file_exists($themeDir)) {
				continue;
			}

			$themes[$theme] = [];
			// Fetch all the theme icons!
			$themeIt = new \DirectoryIterator($themeDir);
			foreach ($themeIt as $fileInfo) {
				if ($fileInfo->isFile()) {
					$file = preg_replace('/.[^.]*$/', '', $fileInfo->getFilename());
					$themes[$theme][] = $file;
				}
			}

			//Remove Duplicates
			$themes[$theme] = array_values(array_unique($themes[$theme]));
			sort($themes[$theme]);
		}

		//Generate the JS
		return '/**
* This file is automatically generated
* DO NOT EDIT MANUALLY!
*
* You can update the list of MimeType Aliases in config/mimetypealiases.json
* The list of files is fetched from core/img/filetypes
* To regenerate this file run ./occ maintenance:mimetype:update-js
*/
OC.MimeTypeList={
	aliases: ' . json_encode($aliases, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . ',
	files: ' . json_encode($files, JSON_PRETTY_PRINT) . ',
	themes: ' . json_encode($themes, JSON_PRETTY_PRINT) . '
};
';
	}

}
