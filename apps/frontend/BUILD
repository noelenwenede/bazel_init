load("@aspect_rules_js//js:defs.bzl", "js_library", "js_run_devserver", "js_test")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:react-scripts/package_json.bzl", cra_bin = "bin")
load("@npm//:defs.bzl", "npm_link_all_packages")

# npm_link_all_packages(name = "node_modules")


ASSET_PATTERNS = [
    "public/**/*"
]

SRC_PATTERNS = [
    "src/**/*.tsx",
    "src/**/*.ts",
    "src/**/*.css",
    "src/**/*.svg"
]

# Filename conventions described at
# https://create-react-app.dev/docs/running-tests#filename-conventions
TEST_PATTERNS = [
    "src/**/*.test.tsx",
    "src/**/*.test.ts",
    "src/**/*.spec.tsx",
    "src/**/*.spec.ts",
]

SRCS = glob(
    include = SRC_PATTERNS + ASSET_PATTERNS,
    exclude = TEST_PATTERNS,
)

print("\n")
print("===================\n")
print("Generated Source files: ") 
print(SRCS) 
print("\n")

CRA_DEPS = [
    "//:package_json",
    "tsconfig.json",
    "package.json",
    "//:node_modules/eslint-config-react-app",
    "//:node_modules/react-dom",
    "//:node_modules/react-scripts",
    "//:node_modules/react",
    "//:node_modules/typescript",
    "//:node_modules/web-vitals",
]

cra_bin.react_scripts(
    # Note: If you want to change the name make sure you update BUILD_PATH below accordingly
    # https://create-react-app.dev/docs/advanced-configuration/
    name = "build",
    args = ["build"],
    srcs = SRCS + CRA_DEPS,
    env = {"BUILD_PATH": "./build"},
    out_dirs = ["build"],
    chdir = package_name(),
    visibility = ["//visibility:public"]
)

js_run_devserver(
    name = "start",
    args = ["start"],
    command = "../../node_modules/.bin/react-scripts",
    data = SRCS + CRA_DEPS,
    chdir = package_name(),
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)
