<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = $vendorDir;

return array(
    'OCA\\DAV\\AppInfo\\Application' => $baseDir . '/../lib/AppInfo/Application.php',
    'OCA\\DAV\\AppInfo\\PluginManager' => $baseDir . '/../lib/AppInfo/PluginManager.php',
    'OCA\\DAV\\Avatars\\AvatarHome' => $baseDir . '/../lib/Avatars/AvatarHome.php',
    'OCA\\DAV\\Avatars\\AvatarNode' => $baseDir . '/../lib/Avatars/AvatarNode.php',
    'OCA\\DAV\\Avatars\\RootCollection' => $baseDir . '/../lib/Avatars/RootCollection.php',
    'OCA\\DAV\\BackgroundJob\\BuildReminderIndexBackgroundJob' => $baseDir . '/../lib/BackgroundJob/BuildReminderIndexBackgroundJob.php',
    'OCA\\DAV\\BackgroundJob\\CleanupDirectLinksJob' => $baseDir . '/../lib/BackgroundJob/CleanupDirectLinksJob.php',
    'OCA\\DAV\\BackgroundJob\\CleanupInvitationTokenJob' => $baseDir . '/../lib/BackgroundJob/CleanupInvitationTokenJob.php',
    'OCA\\DAV\\BackgroundJob\\EventReminderJob' => $baseDir . '/../lib/BackgroundJob/EventReminderJob.php',
    'OCA\\DAV\\BackgroundJob\\GenerateBirthdayCalendarBackgroundJob' => $baseDir . '/../lib/BackgroundJob/GenerateBirthdayCalendarBackgroundJob.php',
    'OCA\\DAV\\BackgroundJob\\RefreshWebcalJob' => $baseDir . '/../lib/BackgroundJob/RefreshWebcalJob.php',
    'OCA\\DAV\\BackgroundJob\\RegisterRegenerateBirthdayCalendars' => $baseDir . '/../lib/BackgroundJob/RegisterRegenerateBirthdayCalendars.php',
    'OCA\\DAV\\BackgroundJob\\UpdateCalendarResourcesRoomsBackgroundJob' => $baseDir . '/../lib/BackgroundJob/UpdateCalendarResourcesRoomsBackgroundJob.php',
    'OCA\\DAV\\BackgroundJob\\UploadCleanup' => $baseDir . '/../lib/BackgroundJob/UploadCleanup.php',
    'OCA\\DAV\\CalDAV\\Activity\\Backend' => $baseDir . '/../lib/CalDAV/Activity/Backend.php',
    'OCA\\DAV\\CalDAV\\Activity\\Filter\\Calendar' => $baseDir . '/../lib/CalDAV/Activity/Filter/Calendar.php',
    'OCA\\DAV\\CalDAV\\Activity\\Filter\\Todo' => $baseDir . '/../lib/CalDAV/Activity/Filter/Todo.php',
    'OCA\\DAV\\CalDAV\\Activity\\Provider\\Base' => $baseDir . '/../lib/CalDAV/Activity/Provider/Base.php',
    'OCA\\DAV\\CalDAV\\Activity\\Provider\\Calendar' => $baseDir . '/../lib/CalDAV/Activity/Provider/Calendar.php',
    'OCA\\DAV\\CalDAV\\Activity\\Provider\\Event' => $baseDir . '/../lib/CalDAV/Activity/Provider/Event.php',
    'OCA\\DAV\\CalDAV\\Activity\\Provider\\Todo' => $baseDir . '/../lib/CalDAV/Activity/Provider/Todo.php',
    'OCA\\DAV\\CalDAV\\Activity\\Setting\\Calendar' => $baseDir . '/../lib/CalDAV/Activity/Setting/Calendar.php',
    'OCA\\DAV\\CalDAV\\Activity\\Setting\\Event' => $baseDir . '/../lib/CalDAV/Activity/Setting/Event.php',
    'OCA\\DAV\\CalDAV\\Activity\\Setting\\Todo' => $baseDir . '/../lib/CalDAV/Activity/Setting/Todo.php',
    'OCA\\DAV\\CalDAV\\BirthdayCalendar\\EnablePlugin' => $baseDir . '/../lib/CalDAV/BirthdayCalendar/EnablePlugin.php',
    'OCA\\DAV\\CalDAV\\BirthdayService' => $baseDir . '/../lib/CalDAV/BirthdayService.php',
    'OCA\\DAV\\CalDAV\\CachedSubscription' => $baseDir . '/../lib/CalDAV/CachedSubscription.php',
    'OCA\\DAV\\CalDAV\\CachedSubscriptionObject' => $baseDir . '/../lib/CalDAV/CachedSubscriptionObject.php',
    'OCA\\DAV\\CalDAV\\CalDavBackend' => $baseDir . '/../lib/CalDAV/CalDavBackend.php',
    'OCA\\DAV\\CalDAV\\Calendar' => $baseDir . '/../lib/CalDAV/Calendar.php',
    'OCA\\DAV\\CalDAV\\CalendarHome' => $baseDir . '/../lib/CalDAV/CalendarHome.php',
    'OCA\\DAV\\CalDAV\\CalendarImpl' => $baseDir . '/../lib/CalDAV/CalendarImpl.php',
    'OCA\\DAV\\CalDAV\\CalendarManager' => $baseDir . '/../lib/CalDAV/CalendarManager.php',
    'OCA\\DAV\\CalDAV\\CalendarObject' => $baseDir . '/../lib/CalDAV/CalendarObject.php',
    'OCA\\DAV\\CalDAV\\CalendarRoot' => $baseDir . '/../lib/CalDAV/CalendarRoot.php',
    'OCA\\DAV\\CalDAV\\ICSExportPlugin\\ICSExportPlugin' => $baseDir . '/../lib/CalDAV/ICSExportPlugin/ICSExportPlugin.php',
    'OCA\\DAV\\CalDAV\\InvitationResponse\\InvitationResponseServer' => $baseDir . '/../lib/CalDAV/InvitationResponse/InvitationResponseServer.php',
    'OCA\\DAV\\CalDAV\\Outbox' => $baseDir . '/../lib/CalDAV/Outbox.php',
    'OCA\\DAV\\CalDAV\\Plugin' => $baseDir . '/../lib/CalDAV/Plugin.php',
    'OCA\\DAV\\CalDAV\\Principal\\Collection' => $baseDir . '/../lib/CalDAV/Principal/Collection.php',
    'OCA\\DAV\\CalDAV\\Principal\\User' => $baseDir . '/../lib/CalDAV/Principal/User.php',
    'OCA\\DAV\\CalDAV\\Proxy\\Proxy' => $baseDir . '/../lib/CalDAV/Proxy/Proxy.php',
    'OCA\\DAV\\CalDAV\\Proxy\\ProxyMapper' => $baseDir . '/../lib/CalDAV/Proxy/ProxyMapper.php',
    'OCA\\DAV\\CalDAV\\PublicCalendar' => $baseDir . '/../lib/CalDAV/PublicCalendar.php',
    'OCA\\DAV\\CalDAV\\PublicCalendarObject' => $baseDir . '/../lib/CalDAV/PublicCalendarObject.php',
    'OCA\\DAV\\CalDAV\\PublicCalendarRoot' => $baseDir . '/../lib/CalDAV/PublicCalendarRoot.php',
    'OCA\\DAV\\CalDAV\\Publishing\\PublishPlugin' => $baseDir . '/../lib/CalDAV/Publishing/PublishPlugin.php',
    'OCA\\DAV\\CalDAV\\Publishing\\Xml\\Publisher' => $baseDir . '/../lib/CalDAV/Publishing/Xml/Publisher.php',
    'OCA\\DAV\\CalDAV\\Reminder\\Backend' => $baseDir . '/../lib/CalDAV/Reminder/Backend.php',
    'OCA\\DAV\\CalDAV\\Reminder\\INotificationProvider' => $baseDir . '/../lib/CalDAV/Reminder/INotificationProvider.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProviderManager' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProviderManager.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProvider\\AbstractProvider' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProvider/AbstractProvider.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProvider\\AudioProvider' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProvider/AudioProvider.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProvider\\EmailProvider' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProvider/EmailProvider.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProvider\\ProviderNotAvailableException' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProvider/ProviderNotAvailableException.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationProvider\\PushProvider' => $baseDir . '/../lib/CalDAV/Reminder/NotificationProvider/PushProvider.php',
    'OCA\\DAV\\CalDAV\\Reminder\\NotificationTypeDoesNotExistException' => $baseDir . '/../lib/CalDAV/Reminder/NotificationTypeDoesNotExistException.php',
    'OCA\\DAV\\CalDAV\\Reminder\\Notifier' => $baseDir . '/../lib/CalDAV/Reminder/Notifier.php',
    'OCA\\DAV\\CalDAV\\Reminder\\ReminderService' => $baseDir . '/../lib/CalDAV/Reminder/ReminderService.php',
    'OCA\\DAV\\CalDAV\\ResourceBooking\\AbstractPrincipalBackend' => $baseDir . '/../lib/CalDAV/ResourceBooking/AbstractPrincipalBackend.php',
    'OCA\\DAV\\CalDAV\\ResourceBooking\\ResourcePrincipalBackend' => $baseDir . '/../lib/CalDAV/ResourceBooking/ResourcePrincipalBackend.php',
    'OCA\\DAV\\CalDAV\\ResourceBooking\\RoomPrincipalBackend' => $baseDir . '/../lib/CalDAV/ResourceBooking/RoomPrincipalBackend.php',
    'OCA\\DAV\\CalDAV\\Schedule\\IMipPlugin' => $baseDir . '/../lib/CalDAV/Schedule/IMipPlugin.php',
    'OCA\\DAV\\CalDAV\\Schedule\\Plugin' => $baseDir . '/../lib/CalDAV/Schedule/Plugin.php',
    'OCA\\DAV\\CalDAV\\Search\\SearchPlugin' => $baseDir . '/../lib/CalDAV/Search/SearchPlugin.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\CompFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/CompFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\LimitFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/LimitFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\OffsetFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/OffsetFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\ParamFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/ParamFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\PropFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/PropFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Filter\\SearchTermFilter' => $baseDir . '/../lib/CalDAV/Search/Xml/Filter/SearchTermFilter.php',
    'OCA\\DAV\\CalDAV\\Search\\Xml\\Request\\CalendarSearchReport' => $baseDir . '/../lib/CalDAV/Search/Xml/Request/CalendarSearchReport.php',
    'OCA\\DAV\\CalDAV\\WebcalCaching\\Plugin' => $baseDir . '/../lib/CalDAV/WebcalCaching/Plugin.php',
    'OCA\\DAV\\Capabilities' => $baseDir . '/../lib/Capabilities.php',
    'OCA\\DAV\\CardDAV\\AddressBook' => $baseDir . '/../lib/CardDAV/AddressBook.php',
    'OCA\\DAV\\CardDAV\\AddressBookImpl' => $baseDir . '/../lib/CardDAV/AddressBookImpl.php',
    'OCA\\DAV\\CardDAV\\AddressBookRoot' => $baseDir . '/../lib/CardDAV/AddressBookRoot.php',
    'OCA\\DAV\\CardDAV\\CardDavBackend' => $baseDir . '/../lib/CardDAV/CardDavBackend.php',
    'OCA\\DAV\\CardDAV\\ContactsManager' => $baseDir . '/../lib/CardDAV/ContactsManager.php',
    'OCA\\DAV\\CardDAV\\Converter' => $baseDir . '/../lib/CardDAV/Converter.php',
    'OCA\\DAV\\CardDAV\\HasPhotoPlugin' => $baseDir . '/../lib/CardDAV/HasPhotoPlugin.php',
    'OCA\\DAV\\CardDAV\\ImageExportPlugin' => $baseDir . '/../lib/CardDAV/ImageExportPlugin.php',
    'OCA\\DAV\\CardDAV\\MultiGetExportPlugin' => $baseDir . '/../lib/CardDAV/MultiGetExportPlugin.php',
    'OCA\\DAV\\CardDAV\\PhotoCache' => $baseDir . '/../lib/CardDAV/PhotoCache.php',
    'OCA\\DAV\\CardDAV\\Plugin' => $baseDir . '/../lib/CardDAV/Plugin.php',
    'OCA\\DAV\\CardDAV\\SyncService' => $baseDir . '/../lib/CardDAV/SyncService.php',
    'OCA\\DAV\\CardDAV\\SystemAddressbook' => $baseDir . '/../lib/CardDAV/SystemAddressbook.php',
    'OCA\\DAV\\CardDAV\\UserAddressBooks' => $baseDir . '/../lib/CardDAV/UserAddressBooks.php',
    'OCA\\DAV\\CardDAV\\Xml\\Groups' => $baseDir . '/../lib/CardDAV/Xml/Groups.php',
    'OCA\\DAV\\Command\\CreateAddressBook' => $baseDir . '/../lib/Command/CreateAddressBook.php',
    'OCA\\DAV\\Command\\CreateCalendar' => $baseDir . '/../lib/Command/CreateCalendar.php',
    'OCA\\DAV\\Command\\ListCalendars' => $baseDir . '/../lib/Command/ListCalendars.php',
    'OCA\\DAV\\Command\\MoveCalendar' => $baseDir . '/../lib/Command/MoveCalendar.php',
    'OCA\\DAV\\Command\\RemoveInvalidShares' => $baseDir . '/../lib/Command/RemoveInvalidShares.php',
    'OCA\\DAV\\Command\\SendEventReminders' => $baseDir . '/../lib/Command/SendEventReminders.php',
    'OCA\\DAV\\Command\\SyncBirthdayCalendar' => $baseDir . '/../lib/Command/SyncBirthdayCalendar.php',
    'OCA\\DAV\\Command\\SyncSystemAddressBook' => $baseDir . '/../lib/Command/SyncSystemAddressBook.php',
    'OCA\\DAV\\Comments\\CommentNode' => $baseDir . '/../lib/Comments/CommentNode.php',
    'OCA\\DAV\\Comments\\CommentsPlugin' => $baseDir . '/../lib/Comments/CommentsPlugin.php',
    'OCA\\DAV\\Comments\\EntityCollection' => $baseDir . '/../lib/Comments/EntityCollection.php',
    'OCA\\DAV\\Comments\\EntityTypeCollection' => $baseDir . '/../lib/Comments/EntityTypeCollection.php',
    'OCA\\DAV\\Comments\\RootCollection' => $baseDir . '/../lib/Comments/RootCollection.php',
    'OCA\\DAV\\Connector\\LegacyDAVACL' => $baseDir . '/../lib/Connector/LegacyDAVACL.php',
    'OCA\\DAV\\Connector\\PublicAuth' => $baseDir . '/../lib/Connector/PublicAuth.php',
    'OCA\\DAV\\Connector\\Sabre\\AnonymousOptionsPlugin' => $baseDir . '/../lib/Connector/Sabre/AnonymousOptionsPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\AppEnabledPlugin' => $baseDir . '/../lib/Connector/Sabre/AppEnabledPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\Auth' => $baseDir . '/../lib/Connector/Sabre/Auth.php',
    'OCA\\DAV\\Connector\\Sabre\\BearerAuth' => $baseDir . '/../lib/Connector/Sabre/BearerAuth.php',
    'OCA\\DAV\\Connector\\Sabre\\BlockLegacyClientPlugin' => $baseDir . '/../lib/Connector/Sabre/BlockLegacyClientPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\CachingTree' => $baseDir . '/../lib/Connector/Sabre/CachingTree.php',
    'OCA\\DAV\\Connector\\Sabre\\ChecksumList' => $baseDir . '/../lib/Connector/Sabre/ChecksumList.php',
    'OCA\\DAV\\Connector\\Sabre\\CommentPropertiesPlugin' => $baseDir . '/../lib/Connector/Sabre/CommentPropertiesPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\CopyEtagHeaderPlugin' => $baseDir . '/../lib/Connector/Sabre/CopyEtagHeaderPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\CustomPropertiesBackend' => $baseDir . '/../lib/Connector/Sabre/CustomPropertiesBackend.php',
    'OCA\\DAV\\Connector\\Sabre\\DavAclPlugin' => $baseDir . '/../lib/Connector/Sabre/DavAclPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\Directory' => $baseDir . '/../lib/Connector/Sabre/Directory.php',
    'OCA\\DAV\\Connector\\Sabre\\DummyGetResponsePlugin' => $baseDir . '/../lib/Connector/Sabre/DummyGetResponsePlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\ExceptionLoggerPlugin' => $baseDir . '/../lib/Connector/Sabre/ExceptionLoggerPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\EntityTooLarge' => $baseDir . '/../lib/Connector/Sabre/Exception/EntityTooLarge.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\FileLocked' => $baseDir . '/../lib/Connector/Sabre/Exception/FileLocked.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\Forbidden' => $baseDir . '/../lib/Connector/Sabre/Exception/Forbidden.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\InvalidPath' => $baseDir . '/../lib/Connector/Sabre/Exception/InvalidPath.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\PasswordLoginForbidden' => $baseDir . '/../lib/Connector/Sabre/Exception/PasswordLoginForbidden.php',
    'OCA\\DAV\\Connector\\Sabre\\Exception\\UnsupportedMediaType' => $baseDir . '/../lib/Connector/Sabre/Exception/UnsupportedMediaType.php',
    'OCA\\DAV\\Connector\\Sabre\\FakeLockerPlugin' => $baseDir . '/../lib/Connector/Sabre/FakeLockerPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\File' => $baseDir . '/../lib/Connector/Sabre/File.php',
    'OCA\\DAV\\Connector\\Sabre\\FilesPlugin' => $baseDir . '/../lib/Connector/Sabre/FilesPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\FilesReportPlugin' => $baseDir . '/../lib/Connector/Sabre/FilesReportPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\LockPlugin' => $baseDir . '/../lib/Connector/Sabre/LockPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\MaintenancePlugin' => $baseDir . '/../lib/Connector/Sabre/MaintenancePlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\Node' => $baseDir . '/../lib/Connector/Sabre/Node.php',
    'OCA\\DAV\\Connector\\Sabre\\ObjectTree' => $baseDir . '/../lib/Connector/Sabre/ObjectTree.php',
    'OCA\\DAV\\Connector\\Sabre\\Principal' => $baseDir . '/../lib/Connector/Sabre/Principal.php',
    'OCA\\DAV\\Connector\\Sabre\\QuotaPlugin' => $baseDir . '/../lib/Connector/Sabre/QuotaPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\Server' => $baseDir . '/../lib/Connector/Sabre/Server.php',
    'OCA\\DAV\\Connector\\Sabre\\ServerFactory' => $baseDir . '/../lib/Connector/Sabre/ServerFactory.php',
    'OCA\\DAV\\Connector\\Sabre\\ShareTypeList' => $baseDir . '/../lib/Connector/Sabre/ShareTypeList.php',
    'OCA\\DAV\\Connector\\Sabre\\ShareeList' => $baseDir . '/../lib/Connector/Sabre/ShareeList.php',
    'OCA\\DAV\\Connector\\Sabre\\SharesPlugin' => $baseDir . '/../lib/Connector/Sabre/SharesPlugin.php',
    'OCA\\DAV\\Connector\\Sabre\\TagList' => $baseDir . '/../lib/Connector/Sabre/TagList.php',
    'OCA\\DAV\\Connector\\Sabre\\TagsPlugin' => $baseDir . '/../lib/Connector/Sabre/TagsPlugin.php',
    'OCA\\DAV\\Controller\\BirthdayCalendarController' => $baseDir . '/../lib/Controller/BirthdayCalendarController.php',
    'OCA\\DAV\\Controller\\DirectController' => $baseDir . '/../lib/Controller/DirectController.php',
    'OCA\\DAV\\Controller\\InvitationResponseController' => $baseDir . '/../lib/Controller/InvitationResponseController.php',
    'OCA\\DAV\\DAV\\CustomPropertiesBackend' => $baseDir . '/../lib/DAV/CustomPropertiesBackend.php',
    'OCA\\DAV\\DAV\\GroupPrincipalBackend' => $baseDir . '/../lib/DAV/GroupPrincipalBackend.php',
    'OCA\\DAV\\DAV\\PublicAuth' => $baseDir . '/../lib/DAV/PublicAuth.php',
    'OCA\\DAV\\DAV\\Sharing\\Backend' => $baseDir . '/../lib/DAV/Sharing/Backend.php',
    'OCA\\DAV\\DAV\\Sharing\\IShareable' => $baseDir . '/../lib/DAV/Sharing/IShareable.php',
    'OCA\\DAV\\DAV\\Sharing\\Plugin' => $baseDir . '/../lib/DAV/Sharing/Plugin.php',
    'OCA\\DAV\\DAV\\Sharing\\Xml\\Invite' => $baseDir . '/../lib/DAV/Sharing/Xml/Invite.php',
    'OCA\\DAV\\DAV\\Sharing\\Xml\\ShareRequest' => $baseDir . '/../lib/DAV/Sharing/Xml/ShareRequest.php',
    'OCA\\DAV\\DAV\\SystemPrincipalBackend' => $baseDir . '/../lib/DAV/SystemPrincipalBackend.php',
    'OCA\\DAV\\Db\\Direct' => $baseDir . '/../lib/Db/Direct.php',
    'OCA\\DAV\\Db\\DirectMapper' => $baseDir . '/../lib/Db/DirectMapper.php',
    'OCA\\DAV\\Direct\\DirectFile' => $baseDir . '/../lib/Direct/DirectFile.php',
    'OCA\\DAV\\Direct\\DirectHome' => $baseDir . '/../lib/Direct/DirectHome.php',
    'OCA\\DAV\\Direct\\Server' => $baseDir . '/../lib/Direct/Server.php',
    'OCA\\DAV\\Direct\\ServerFactory' => $baseDir . '/../lib/Direct/ServerFactory.php',
    'OCA\\DAV\\Exception\\UnsupportedLimitOnInitialSyncException' => $baseDir . '/../lib/Exception/UnsupportedLimitOnInitialSyncException.php',
    'OCA\\DAV\\Files\\BrowserErrorPagePlugin' => $baseDir . '/../lib/Files/BrowserErrorPagePlugin.php',
    'OCA\\DAV\\Files\\FileSearchBackend' => $baseDir . '/../lib/Files/FileSearchBackend.php',
    'OCA\\DAV\\Files\\FilesHome' => $baseDir . '/../lib/Files/FilesHome.php',
    'OCA\\DAV\\Files\\LazySearchBackend' => $baseDir . '/../lib/Files/LazySearchBackend.php',
    'OCA\\DAV\\Files\\RootCollection' => $baseDir . '/../lib/Files/RootCollection.php',
    'OCA\\DAV\\Files\\Sharing\\FilesDropPlugin' => $baseDir . '/../lib/Files/Sharing/FilesDropPlugin.php',
    'OCA\\DAV\\Files\\Sharing\\PublicLinkCheckPlugin' => $baseDir . '/../lib/Files/Sharing/PublicLinkCheckPlugin.php',
    'OCA\\DAV\\HookManager' => $baseDir . '/../lib/HookManager.php',
    'OCA\\DAV\\Migration\\BuildCalendarSearchIndex' => $baseDir . '/../lib/Migration/BuildCalendarSearchIndex.php',
    'OCA\\DAV\\Migration\\BuildCalendarSearchIndexBackgroundJob' => $baseDir . '/../lib/Migration/BuildCalendarSearchIndexBackgroundJob.php',
    'OCA\\DAV\\Migration\\CalDAVRemoveEmptyValue' => $baseDir . '/../lib/Migration/CalDAVRemoveEmptyValue.php',
    'OCA\\DAV\\Migration\\ChunkCleanup' => $baseDir . '/../lib/Migration/ChunkCleanup.php',
    'OCA\\DAV\\Migration\\FixBirthdayCalendarComponent' => $baseDir . '/../lib/Migration/FixBirthdayCalendarComponent.php',
    'OCA\\DAV\\Migration\\RefreshWebcalJobRegistrar' => $baseDir . '/../lib/Migration/RefreshWebcalJobRegistrar.php',
    'OCA\\DAV\\Migration\\RegenerateBirthdayCalendars' => $baseDir . '/../lib/Migration/RegenerateBirthdayCalendars.php',
    'OCA\\DAV\\Migration\\RegisterBuildReminderIndexBackgroundJob' => $baseDir . '/../lib/Migration/RegisterBuildReminderIndexBackgroundJob.php',
    'OCA\\DAV\\Migration\\RemoveClassifiedEventActivity' => $baseDir . '/../lib/Migration/RemoveClassifiedEventActivity.php',
    'OCA\\DAV\\Migration\\RemoveOrphanEventsAndContacts' => $baseDir . '/../lib/Migration/RemoveOrphanEventsAndContacts.php',
    'OCA\\DAV\\Migration\\Version1004Date20170825134824' => $baseDir . '/../lib/Migration/Version1004Date20170825134824.php',
    'OCA\\DAV\\Migration\\Version1004Date20170919104507' => $baseDir . '/../lib/Migration/Version1004Date20170919104507.php',
    'OCA\\DAV\\Migration\\Version1004Date20170924124212' => $baseDir . '/../lib/Migration/Version1004Date20170924124212.php',
    'OCA\\DAV\\Migration\\Version1004Date20170926103422' => $baseDir . '/../lib/Migration/Version1004Date20170926103422.php',
    'OCA\\DAV\\Migration\\Version1005Date20180413093149' => $baseDir . '/../lib/Migration/Version1005Date20180413093149.php',
    'OCA\\DAV\\Migration\\Version1005Date20180530124431' => $baseDir . '/../lib/Migration/Version1005Date20180530124431.php',
    'OCA\\DAV\\Migration\\Version1006Date20180619154313' => $baseDir . '/../lib/Migration/Version1006Date20180619154313.php',
    'OCA\\DAV\\Migration\\Version1006Date20180628111625' => $baseDir . '/../lib/Migration/Version1006Date20180628111625.php',
    'OCA\\DAV\\Migration\\Version1008Date20181030113700' => $baseDir . '/../lib/Migration/Version1008Date20181030113700.php',
    'OCA\\DAV\\Migration\\Version1008Date20181105104826' => $baseDir . '/../lib/Migration/Version1008Date20181105104826.php',
    'OCA\\DAV\\Migration\\Version1008Date20181105104833' => $baseDir . '/../lib/Migration/Version1008Date20181105104833.php',
    'OCA\\DAV\\Migration\\Version1008Date20181105110300' => $baseDir . '/../lib/Migration/Version1008Date20181105110300.php',
    'OCA\\DAV\\Migration\\Version1008Date20181105112049' => $baseDir . '/../lib/Migration/Version1008Date20181105112049.php',
    'OCA\\DAV\\Migration\\Version1008Date20181114084440' => $baseDir . '/../lib/Migration/Version1008Date20181114084440.php',
    'OCA\\DAV\\Migration\\Version1011Date20190725113607' => $baseDir . '/../lib/Migration/Version1011Date20190725113607.php',
    'OCA\\DAV\\Migration\\Version1011Date20190806104428' => $baseDir . '/../lib/Migration/Version1011Date20190806104428.php',
    'OCA\\DAV\\Migration\\Version1012Date20190808122342' => $baseDir . '/../lib/Migration/Version1012Date20190808122342.php',
    'OCA\\DAV\\Provisioning\\Apple\\AppleProvisioningNode' => $baseDir . '/../lib/Provisioning/Apple/AppleProvisioningNode.php',
    'OCA\\DAV\\Provisioning\\Apple\\AppleProvisioningPlugin' => $baseDir . '/../lib/Provisioning/Apple/AppleProvisioningPlugin.php',
    'OCA\\DAV\\RootCollection' => $baseDir . '/../lib/RootCollection.php',
    'OCA\\DAV\\Server' => $baseDir . '/../lib/Server.php',
    'OCA\\DAV\\Settings\\CalDAVSettings' => $baseDir . '/../lib/Settings/CalDAVSettings.php',
    'OCA\\DAV\\SystemTag\\SystemTagMappingNode' => $baseDir . '/../lib/SystemTag/SystemTagMappingNode.php',
    'OCA\\DAV\\SystemTag\\SystemTagNode' => $baseDir . '/../lib/SystemTag/SystemTagNode.php',
    'OCA\\DAV\\SystemTag\\SystemTagPlugin' => $baseDir . '/../lib/SystemTag/SystemTagPlugin.php',
    'OCA\\DAV\\SystemTag\\SystemTagsByIdCollection' => $baseDir . '/../lib/SystemTag/SystemTagsByIdCollection.php',
    'OCA\\DAV\\SystemTag\\SystemTagsObjectMappingCollection' => $baseDir . '/../lib/SystemTag/SystemTagsObjectMappingCollection.php',
    'OCA\\DAV\\SystemTag\\SystemTagsObjectTypeCollection' => $baseDir . '/../lib/SystemTag/SystemTagsObjectTypeCollection.php',
    'OCA\\DAV\\SystemTag\\SystemTagsRelationsCollection' => $baseDir . '/../lib/SystemTag/SystemTagsRelationsCollection.php',
    'OCA\\DAV\\Traits\\PrincipalProxyTrait' => $baseDir . '/../lib/Traits/PrincipalProxyTrait.php',
    'OCA\\DAV\\Upload\\AssemblyStream' => $baseDir . '/../lib/Upload/AssemblyStream.php',
    'OCA\\DAV\\Upload\\ChunkingPlugin' => $baseDir . '/../lib/Upload/ChunkingPlugin.php',
    'OCA\\DAV\\Upload\\CleanupService' => $baseDir . '/../lib/Upload/CleanupService.php',
    'OCA\\DAV\\Upload\\FutureFile' => $baseDir . '/../lib/Upload/FutureFile.php',
    'OCA\\DAV\\Upload\\RootCollection' => $baseDir . '/../lib/Upload/RootCollection.php',
    'OCA\\DAV\\Upload\\UploadFolder' => $baseDir . '/../lib/Upload/UploadFolder.php',
    'OCA\\DAV\\Upload\\UploadHome' => $baseDir . '/../lib/Upload/UploadHome.php',
);
