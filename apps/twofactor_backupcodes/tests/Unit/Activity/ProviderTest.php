<?php

/**
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @copyright Copyright (c) 2017 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * Two-factor backup codes
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\TwoFactorBackupCodes\Test\Unit\Activity;

use InvalidArgumentException;
use OCA\TwoFactorBackupCodes\Activity\Provider;
use OCP\Activity\IEvent;
use OCP\Activity\IManager;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;
use PHPUnit_Framework_MockObject_MockObject;
use Test\TestCase;

class ProviderTest extends TestCase {

	/** @var IFactory|PHPUnit_Framework_MockObject_MockObject */
	private $l10n;

	/** @var IURLGenerator|PHPUnit_Framework_MockObject_MockObject */
	private $urlGenerator;

	/** @var IManager|PHPUnit_Framework_MockObject_MockObject */
	private $activityManager;

	/** @var Provider */
	private $provider;

	protected function setUp(): void {
		parent::setUp();

		$this->l10n = $this->createMock(IFactory::class);
		$this->urlGenerator = $this->createMock(IURLGenerator::class);
		$this->activityManager = $this->createMock(IManager::class);

		$this->provider = new Provider($this->l10n, $this->urlGenerator, $this->activityManager);
	}

	public function testParseUnrelated() {
		$lang = 'ru';
		$event = $this->createMock(IEvent::class);
		$event->expects($this->once())
			->method('getApp')
			->willReturn('comments');
		$this->expectException(InvalidArgumentException::class);

		$this->provider->parse($lang, $event);
	}

	public function subjectData() {
		return [
			['codes_generated'],
		];
	}

	/**
	 * @dataProvider subjectData
	 */
	public function testParse($subject) {
		$lang = 'ru';
		$event = $this->createMock(IEvent::class);
		$l = $this->createMock(IL10N::class);

		$event->expects($this->once())
			->method('getApp')
			->willReturn('twofactor_backupcodes');
		$this->l10n->expects($this->once())
			->method('get')
			->with('twofactor_backupcodes', $lang)
			->willReturn($l);
		$this->urlGenerator->expects($this->once())
			->method('imagePath')
			->with('core', 'actions/password.svg')
			->willReturn('path/to/image');
		$this->urlGenerator->expects($this->once())
			->method('getAbsoluteURL')
			->with('path/to/image')
			->willReturn('absolute/path/to/image');
		$event->expects($this->once())
			->method('setIcon')
			->with('absolute/path/to/image');
		$event->expects($this->once())
			->method('getSubject')
			->willReturn($subject);
		$event->expects($this->once())
			->method('setParsedSubject');

		$this->provider->parse($lang, $event);
	}

	public function testParseInvalidSubject() {
		$lang = 'ru';
		$l = $this->createMock(IL10N::class);
		$event = $this->createMock(IEvent::class);

		$event->expects($this->once())
			->method('getApp')
			->willReturn('twofactor_backupcodes');
		$this->l10n->expects($this->once())
			->method('get')
			->with('twofactor_backupcodes', $lang)
			->willReturn($l);
		$event->expects($this->once())
			->method('getSubject')
			->willReturn('unrelated');

		$this->expectException(InvalidArgumentException::class);
		$this->provider->parse($lang, $event);
	}

}
