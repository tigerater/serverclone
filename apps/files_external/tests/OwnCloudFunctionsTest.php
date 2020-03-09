<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Robin McCorkell <robin@mccorkell.me.uk>
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @author Vincent Petry <pvince81@owncloud.com>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\Files_External\Tests;

/**
 * Class OwnCloudFunctions
 *
 * @group DB
 *
 * @package OCA\Files_External\Tests
 */
class OwnCloudFunctionsTest extends \Test\TestCase {

	function configUrlProvider() {
		return array(
			array(
				array(
					'host' => 'testhost',
					'root' => 'testroot',
					'secure' => false
				),
				'http://testhost/remote.php/webdav/testroot/',
			),
			array(
				array(
					'host' => 'testhost',
					'root' => 'testroot',
					'secure' => true
				),
				'https://testhost/remote.php/webdav/testroot/',
			),
			array(
				array(
					'host' => 'http://testhost',
					'root' => 'testroot',
					'secure' => false
				),
				'http://testhost/remote.php/webdav/testroot/',
			),
			array(
				array(
					'host' => 'https://testhost',
					'root' => 'testroot',
					'secure' => false
				),
				'https://testhost/remote.php/webdav/testroot/',
			),
			array(
				array(
					'host' => 'https://testhost/testroot',
					'root' => '',
					'secure' => false
				),
				'https://testhost/testroot/remote.php/webdav/',
			),
			array(
				array(
					'host' => 'https://testhost/testroot',
					'root' => 'subdir',
					'secure' => false
				),
				'https://testhost/testroot/remote.php/webdav/subdir/',
			),
			array(
				array(
					'host' => 'http://testhost/testroot',
					'root' => 'subdir',
					'secure' => true
				),
				'http://testhost/testroot/remote.php/webdav/subdir/',
			),
			array(
				array(
					'host' => 'http://testhost/testroot/',
					'root' => '/subdir',
					'secure' => false
				),
				'http://testhost/testroot/remote.php/webdav/subdir/',
			),
		);
	}

	/**
	 * @dataProvider configUrlProvider
	 */
	public function testConfig($config, $expectedUri) {
		$config['user'] = 'someuser';
		$config['password'] = 'somepassword';
		$instance = new \OCA\Files_External\Lib\Storage\OwnCloud($config);
		$this->assertEquals($expectedUri, $instance->createBaseUri());
	}
}
