load("@aspect_rules_js//js:defs.bzl", "js_test", "js_run_devserver", "js_binary")

js_binary(
    # A unique name for this target.
    name = "run_cypress_with_node",
    # Whether runfiles are enabled in the current build configuration
    # enable_runfiles = False,
    # The main script which is evaluated by node.js
    entry_point = "cypress_wrapper.js",
    data = [
        "//:node_modules/cypress",
        "//:node_modules/http-server",
        "//apps/frontend:build",
        "src/e2e/spec.cy.js",
        "cypress.config.js"
    ],
    chdir = package_name()
)

# This can be used in other rules to run cypress
# Add data dependecies to run this binary
js_binary(
    # A unique name for this target.
    name = "cypress_wrapper_tool",
    entry_point = "cypress_wrapper.js",
)

js_run_devserver(
    # A unique name for this target.
    name = "cypress_dev",
    # enable_runfiles = False,
    # The main script which is evaluated by node.js
    tool = ":cypress_wrapper_tool",
    data = [
        "//:node_modules/cypress",
        "//:node_modules/http-server",
        "//apps/frontend:build",
        "src/e2e/spec.cy.js",
        "cypress.config.js"
    ],
    chdir = package_name()
)

js_test(
    # A unique name for this target.
    name = "cypress",
    # args = ["open"],
    # The main script which is evaluated by node.js
    entry_point = "cypress_wrapper.js",
    data = [
        "//:node_modules/cypress",
        # needs to depend on the output of the frontend build target
        "//apps/frontend:build",
        "//:node_modules/http-server",
        "src/e2e/spec.cy.js",
        "cypress.config.js"
    ],
    chdir = package_name(),
    log_level = "debug",
    tags = ["local"],
)
