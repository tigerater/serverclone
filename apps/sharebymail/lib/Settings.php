<?php
/**
 * @copyright Copyright (c) 2016 Bjoern Schiessle <bjoern@schiessle.org>
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

namespace OCA\ShareByMail;


use OCA\ShareByMail\Settings\SettingsManager;

class Settings {

	/** @var SettingsManager */
	private $settingsManager;

	public function __construct(SettingsManager $settingsManager) {
		$this->settingsManager = $settingsManager;
	}

	/**
	 * announce that the share-by-mail share provider is enabled
	 *
	 * @param array $settings
	 */
	public function announceShareProvider(array $settings) {
		$array = json_decode($settings['array']['oc_appconfig'], true);
		$array['shareByMailEnabled'] = true;
		$settings['array']['oc_appconfig'] = json_encode($array);
	}

	public function announceShareByMailSettings(array $settings) {
		$array = json_decode($settings['array']['oc_appconfig'], true);
		$array['shareByMail']['enforcePasswordProtection'] = $this->settingsManager->enforcePasswordProtection();
		$settings['array']['oc_appconfig'] = json_encode($array);
	}
}
