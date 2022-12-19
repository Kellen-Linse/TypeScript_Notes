# The TypeScript Compiler 

- Documentation for the Compiler: [Link](https://www.typescriptlang.org/tsconfig)

### Compiling to JavaScript

- There are **TONS** of settings, some more important than others.

> In a new folder, or as we are setting up a folder to contain TS...
>
> From the terminal type: `tsc --init`
>   - This will make a `tsconfig.json` file.

- Many of the settings are commented out.

### Watch Mode

> TS can watch a file and recompile it whenever the file is saved.
> We start this by calling: `tsc -w <filename>` in the terminal.

- Watch mode will show you the errors it finds.

### Working with Multiple Files

> We can compile all TS files within a folder by simply typing `tsc` in the terminal.
>   - (Our terminal must be open in that folder as well)
>   - this command will compile all `.ts` files that it finds.

### The Files Compiler Option

- We can add new options, see the docs explaining: [Link](https://www.typescriptlang.org/tsconfig)
- When we add options to our `tsconfig` file, be sure to check that you are adding the option at the correct level within the JSON object.

<br>

- Examples of things we can change:
  - What files to ignore.
  - We can also specifically "exclude" or "include" files and directories.
    - If you start to specify which files to exclude be sure to exclude node_modules if it is in your files.
  - Where our compiled TS folders will live (commonly within a `dist` folder).
    - `outDir` option.
  - `target` governs the JS version that the TS compiler outputs. 
    - Outputs to `ES<some version>`... ES6
    - See available versions in the docs.
  - If strict mode is enabled (enabled by default).
    - More strongly ensures correctness.