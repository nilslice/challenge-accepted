### Install Extism 

Follow these instructions: https://github.com/extism/cli

### Compile the host

C programs must link the shared library, so ensure you've completed the install step. This is easier in most other languages... 

`cd c-host && clang main.c -lextism`

### Compile the JS to Wasm

Follow these instructions: https://github.com/extism/js-pdk

`cd js-guest && extism-js script.js -i script.d.ts -o code.wasm`

### Run the C program

`./a.out "this is a test"`
