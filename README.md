# Overpy Modules
This is all the modules that I use for my Overwatch workshop gamemodes!

# Dependencies

To use these modules in your gamemode, you'll need:
* Visual Studio Code (https://code.visualstudio.com/)
* The latest version of the OverPy extension (https://github.com/Zezombye/overpy)

# Setup
**Setup:**
1. Download this repository and put it somewhere on your computer.
2. Open Visual Studio Code and install OverPy if you haven't already.

**Using JS Macros:**
1. Define a macro and use the ``__script__`` function in your Overpy script

Example:
```py
#!define GetWorkshopSettings(obj) __script__("path_to_file")
GetWorkshopSettings({
    settings: {
        TIME_LIMIT: {
            Type: `int[60:120]`,
            Category: `Game`,
            Name: `Time Limit`,
            Default: `60`,
            Sort_Order: `0`
        }
    }
})
```

**Using Overpy files:**
1. Use the ``#!include`` function in your Overpy script

Example:
```py
#!include "path_to_file"
```