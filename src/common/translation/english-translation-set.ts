import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const englishTranslationSet: TranslationSet = {
    trayIconShow: "Show",
    trayIconSettings: "Settings",
    trayIconQuit: "Quit",

    userConfirmationProceed: "Proceed?",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "No search results found",

    ueliCommandClearCaches: "Clear caches",
    ueliCommandClearCachesDescription: "Clears all caches of all plugins",
    ueliCommandEditSettingsFile: "Edit settings file",
    ueliCommandEditSettingsFileDescription: "Edit the settings file with your default text editor",
    ueliCommandExit: "Quit",
    ueliCommandExitDescription: "Quit ueli app",
    ueliCommandOpenSettings: "Settings",
    ueliCommandOpenSettingsDescription: "Change settings",
    ueliCommandRefreshIndexes: "Refresh indexes",
    ueliCommandRefreshIndexesDescription: "Refreshes all indexes of all plugins",
    ueliCommandReload: "Reload",
    ueliCommandReloadDescription: "Reload ueli",

    generalErrorTitle: "An error occured",
    generalErrorDescription: "Check log for more details",

    successfullyRefreshedIndexes: "Successfully refreshed indexes",
    successfullyClearedCaches: "Successfully cleared caches",
    successfullyUpdatedconfig: "Successfully updated config",
    successfullyClearedExecutionLog: "Successfully cleared execution log",

    commandlineSearchResultDescription: "Execute {{command}}",

    noFavoritesFoundDescription: "Your execution log is empty",
    noFavoritesFoundTitle: "No favorites found",

    // settings
    settings: "Settings",

    generalSettingsMenuSection: "General",
    pluginSettingsMenuSection: "Plugins",

    generalSettings: "General",
    generalSettingsLanguage: "Language",
    generalSettingsLogExecution: "Log execution",
    generalSettingsPersistentUserInput: "Peristent user input",
    generalSettingsAutostartApp: "Autostart app on system startup",
    generalSettingsShowTrayIcon: "Show tray icon",
    generalSettingsClearCachesOnExit: "Clear caches on quit",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanIntervalEnabled: "Periodic rescan enabled",
    generalSettingsRescanInterval: "Rescan interval (in seconds)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Always show on primary display",
    generalSettingsRememberWindowPosition: "Remember window position",
    generalSettingsExportSettings: "Export current settings",
    generalSettingsSuccessfullyExportedSettings: "Successfully exported settings",
    generalSettingsImportSettings: "Import settings",
    generalSettingsImportFileFilterJsonFiles: "JSON files",
    generalSettingsImportErrorInvalidConfig: "Settings import failed: file content seems to be invalid",
    generalSettingsResetAllSettings: "Reset all settings to default",
    generalSettingsResetWarning: "You are about to reset all general settings to default. Do you want to proceed?",
    generalSettingsResetAllSettingsWarning: "You are about to reset ALL settings to default. Do you want to proceed?",
    generalSettingsClearExecutionLogWarning: "You are about to clear the execution log. Do you want to proceed?",
    generalSettingsHideMainWindowOnBlur: "Hide window when focus is lost",
    generalSettingsCheckingForUpdate: "Checking if update is available",
    generalSettingsDownloadUpdate: "Download update",
    generalSettingsDownloadingUpdate: "Downloading update",
    generalSettingsLatestVersion: "You are running the latest version!",
    generalSettingsErrorWhileCheckingForUpdate: "Error while trying to check for update",
    clearExecutionLog: "Clear execution log",
    openDebugLog: "Open debug log",
    openTempFolder: "Open temp folder",

    hotkeyKeyBackspace: "Backspace",
    hotkeyKeyDelete: "Delete",
    hotkeyKeyDown: "Down",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Left",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Return",
    hotkeyKeyRight: "Right",
    hotkeyKeySpace: "Space",
    hotkeyKeyTab: "Tab",
    hotkeyKeyUp: "Up",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Ctrl",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Shift",

    appearanceSettings: "Appearance",
    appearanceSettingsWindowWidth: "Window width (in pixels)",
    appearanceSettingsMaxSearchResultsPerPage: "Max search results per page",
    appearanceSettingsSearchResultHeight: "Search result height (in pixels)",
    appearanceSettingsSmoothScrolling: "Smooth scrolling",
    appearanceSettingsUserInputHeight: "User input height (in pixels)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Show description on all search results",
    appearanceSettingsShowSearchIcon: "Show search icon in search field",
    appearanceSettingsShowSearchResultNumbers: "Show search result numbers",
    appearanceSettingsResetWarningMessage: "You are about to reset all appearance settings to default. Do you want to proceed?",

    colorThemeSettings: "Color Theme",
    colorThemeSettingsImportColorTheme: "Import color theme",
    colorThemeSettingsExportColorTheme: "Export color theme",
    colorThemeSettingsResetWarning: "You are about to reset all color theme settings to default. Do you want to proceed?",
    colorThemeExportSucceeded: "Color theme successfully exported",
    colorThemeExportFailed: "Color theme export failed",
    colorThemeImportSucceeded: "Color theme successfully imported",
    colorThemeImportFailed: "Color theme import failed",
    colorThemeInvalidColorTheme: "Invalid color theme",
    colorThemePresets: "Presets",
    colorthemeUserInputBackgroundColor: "User input background color",
    colorThemeUserInputTextColor: "User input text color",
    colorThemeSearchResultsBackgroundColor: "Search results background color",
    colorThemeSearchResultsItemActiveBackgroundColor: "Search results active background color",
    colorThemeSearchResultsItemActiveTextColor: "Search results active text color",
    colorThemeSearchResultsItemActiveDescriptionColor: "Search results active description color",
    colorThemeSearchResutlsItemNameTextColor: "Search results name text color",
    colorThemeSearchResultsItemDescriptionTextColor: "Search results description text color",
    colorThemeScrollbarForegroundColor: "Scrollbar foreground color",
    colorThemeScrollbarBackgroundColor: "Scrollbar background color",

    colorPicker: "Color picker",

    applicationSearchSettings: "Application Search",
    applicationSearchSettingsDescription: `This plugin is searching for applications on your computer. You can specify the folders where your applications are installed and which file extension should be used to recognize an application.`,
    applicationSearchSettingsApplicationFolders: "Application folders",
    applicationSearchSettingsApplicationFolder: "Application folder",
    applicationSearchSettingsFolderPath: "Folder path",
    applicationSearchSettingsRemoveAction: "Remove",
    applicationSearchSettingsAddApplicationFolder: "Add application folder",
    applicationSearchSettingsApplicationFileExtensions: "Application file extensions",
    applicationSearchSettingsApplicationFileExtension: "File extension",
    applicationSearchSettingsAddApplicationFileExtension: "Add file extension",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" is not a valid file extension`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} is not a folder"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} does not exist"`,
    applicationSearchSettingsFolderValidationError: `An error occured while trying to validate "{{value}}"`,

    searchEngineSettings: "Search engine",
    searchEngineSettingsDescription: `The search engine is used for preindexed items like applications, shortcuts and operating system settings/commands.`,
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsFuzzynessDescription: "0 = strict, 1 = fuzzy",
    searchEngineSettingsStrict: "Strict",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsMaxSearchResults: "Max search results",
    searchEngineSettingsResetWarning: "You are about to reset all search engine settings to default. Do you want to proceed?",

    shortcutSettings: "Shortcuts",
    shortcutSettingsDescription: `This plugin enables you to quickly open files or websites by setting up your own shortcuts.`,
    shortcutSettingsTableType: "Type",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Execution argument",
    shortcutSettingsTableDescription: "Description",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Edit",
    shortcutSettingsTableDelete: "Delete",
    shortcutSettingsAddShortcut: "Add shortcut",
    shortcutSettingsEditModalImageUrl: "Image URL",
    shortcutSettingsEditModalSvgString: "SVG string",
    shortcutSettingsEditModalGoogleWebsite: "Google website",
    shortcutSettingsEditModalDownloadsFolder: "Downloads folder",
    shortcutSettingsEditModalCommand: "Command",
    shortcutSettingsInvalidShortcutErrorMessage: "Invalid shortcut",
    shortcutSettingsTagPlaceholder: "Add a tag and press enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "Commandline tool",
    shortcutSettingsEditModalCommandLinetoolDescription: "Edit file in Visual Studio Code",
    shortcutSettingsNeedsUserConfirmation: "Needs confirmation before execution",

    translationSettingsTranslation: "Translation",
    translationSettingsDescription: `This plugin enables you to quickly translate words or short sentences. It uses an unofficial API (https://github.com/imankulov/linguee-api) for Linguee (https://linguee.de) and may be unstable.`,
    translationSettingsDebounceDelay: "Debounce delay (in milliseconds)",
    translationSettingsMinSearchTermLength: "Min search term length",
    translationSettingsPrefix: "Prefix",
    translationSettingsSourceLanguage: "Source language",
    translationSettingsTargetLanguage: "Target language",

    everythingSearch: "Everything search",
    everythingSearchSettingDescription: `This plugin enables you to use Everything search to find files and folders on your local file system. You have to install "Everything" and the "Everything Command-line Interface" from https://www.voidtools.com/downloads/. After installing both you have to specify the file path to 'es.exe' below.`,
    everythingSearchPathToBinary: `Path to "es.exe"`,
    everythingSearchPrefix: "Prefix",
    everythingSearchMaxSearchResults: "Max search results",
    everythingSearchPathToBinaryFilterName: "Executable files",

    mdfindSearch: "mdfind search",
    mdfindSettingsDescription: "This plugin enables you to use the native macOS search to find files and folders on your local file system.",
    mdfindSearchDebounceDelay: "Debounce delay (in milliseconds)",
    mdfindSearchPrefix: "Prefix",
    mdfindSearchMaxSearchResults: "Max search results",

    websearch: "Web search",
    websearchSettingDescription: `This plugin enables you to quickly search the internet with your favorite web search engine by setting up your own web search engines.`,
    websearchEngines: "Web search engines",
    websearchEditingModalTitleAdd: "Add web search engine",
    websearchEditingModalTitleEdit: "Edit web search engine",
    websearchName: "Name",
    websearchPrefix: "Prefix",
    websearchUrl: "URL",
    websearchIcon: "Icon",
    websearchPriority: "Priority",
    websearchIsFallback: "Fallback",
    websearchEncodeSearchTerm: "Encode search term",
    websearchInvalidWebsearchEngine: "Invalid web search engine",
    websearchDescription: `Search on {{websearch_engine}} for "{{search_term}}"`,

    fileBrowser: "File Browser",
    fileBrowserSettingsDescription: `This plugin enables you to browse through your local file system. To start you have to enter a valid absolute filepath.`,
    fileBrowserSettingsMaxSearchResults: "Max search results",
    fileBrowserOptionsShowHiddenFiles: "Show hidden files",
    fileBrowserOptionsBlackList: "Blacklist",
    fileBrowserOptionsBlackListPlaceholder: "File or folder name",

    operatingSystemCommands: "Operating system commands",
    operatingSystemCommandsSettingsDescription: `Operating system commands are simple commands to control your operating system e.g. to shutdown or restart your computer.`,

    operatingSystemSettings: "Operating system settings",
    operatingSystemSettingsSettingsDescription: "This plugin enables you to quickly find operating system settings.",

    macOsShutdown: "Shut Down",
    macOsShutdownDescription: "Shut down computer",
    macOsRestart: "Restart",
    macOsRestartDescription: "Restart computer",
    macOsLogout: "Log out",
    macOsLogoutDescription: "Log out current user",
    macOsLock: "Lock",
    macOsLockDescription: "Lock computer",

    windowsShutdown: "Shut down",
    windowsShutdownDescription: "Shut down computer",
    windowsRestart: "Restart",
    windowsRestartDescription: "Restart computer",
    windowsSignout: "Sign out",
    windowsSignoutDescription: "Sign out current user",
    windowsLock: "Lock",
    windowsLockDescription: "Lock computer",
    windowsSleep: "Sleep",
    windowsSleepDescription: "Put computer to sleep",

    calcuator: "Calculator",
    calculatorCopyToClipboard: "Press enter to copy to clipboard",
    calculatorDescription: "This Plugin lets you quickly do simple calculations.",
    calculatorPrecision: "Precision",

    openUrlWithBrowser: "Open with web browser",
    url: "URL",
    urlDescription: "This plugin enables you to quickly open websites by typing in a URL.",
    urlDefaultProtocol: "Default protocol",

    email: "Email",
    emailSettingsDescription: "This plugin enables you to quickly start writing an email by typing in an email address.",
    openNewMail: "Open new email",

    currencyConverter: "Currency Converter",
    currencyConverterDescription: "This plugin enables you to quickly convert currencies. The latest conversion rates are provided by https://exchangeratesapi.io/.",
    currencyConverterPrecision: "Precision",
    currencyConverterCopyToClipboard: "Press enter to copy to clipboard",

    workflows: "Workflows",
    workflowSettingsDescription: "This plugin enables you to quickly execute multiple things at once.",
    workflowSettingsAddWorkflow: "Add workflow",
    workflowName: "Name",
    workflowNamePlaceholder: "Add the name of your workflow here",
    workflowDescription: "Description",
    workflowDescriptionPlaceholder: "Add a description of your workflow here",
    workflowTags: "Tags",
    workflowIcon: "Icon",
    workflowExecutionSteps: "Execution steps",
    workflowExecutionArgumentType: "Executionargument Type",
    wofkflowExecutionArgumentTypeCommandlineTool: "Commandline Tool",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "Invalid execution step",
    workflowInvalidWorkflow: "Invalid workflow",
    workflowNeedsUserConfirmationBeforeExecution: "Needs confirmation before execution",

    commandline: "Commandline",
    commandlinePrefix: "Prefix",
    commandlineSettingsDescription: "This plugin enables you to quickly execute commandline commands.",

    simpleFolderSearch: "Simple folder search",
    simpleFolderSearchDescription: "This plugin enables you to quickly search for files or folders",
    simpleFolderSearchRecursive: "Recursive file scan",
    simpleFolderSearchExcludeHiddenFiles: "Exclude hidden files",
    simpleFolderSearchFolderPath: "Folder path",
    simpleFolderSearchAddFolder: "Add folder",
    simpleFolderSearchEditFolder: "Edit folder",

    uwpSettingsDescription: "This plugin enables you to find preinstalled UWP apps.",

    cancel: "Cancel",
    save: "Save",
    add: "Add",
    remove: "Remove",
    edit: "Edit",
    forExample: "For example",
    iconType: "Icon type",
    showFullFilePath: "Show full file path",
    yes: "Yes",
    no: "No",
    resetToDefault: "Reset to default?",
    resetPluginSettingsToDefaultWarning: "You are about to reset all settings of this plugin to default. Do you want to proceed?",
    filePath: "File path",
    folderPath: "Folder path",
    chooseFile: "Choose file",
    chooseFolder: "Choose folder",
};
