# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.4.1-alpha.0](https://github.com/Lundalogik/lime-web-components/compare/v2.4.0...v2.4.1-alpha.0) (2020-03-30)


### Bug Fixes

* **decorators:** wait for lime properties in componentWillLoad ([d9193e3](https://github.com/Lundalogik/lime-web-components/commit/d9193e3e4dc1d2892dbb766a6fd9a0e2234e4da0)), closes [Lundalogik/crm-feature#1004](https://github.com/Lundalogik/crm-feature/issues/1004)





# [2.4.0](https://github.com/Lundalogik/lime-web-components/compare/v2.3.0...v2.4.0) (2020-03-30)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





## [2.2.1](https://github.com/Lundalogik/lime-web-components/compare/v2.2.0...v2.2.1) (2020-01-09)


### Bug Fixes

* **decorators:** return value from original componentWillLoad in state decorators ([e91faa7](https://github.com/Lundalogik/lime-web-components/commit/e91faa7583afd56685fa4dc39292c5fcd7dfb969)), closes [#104](https://github.com/Lundalogik/lime-web-components/issues/104) [#75](https://github.com/Lundalogik/lime-web-components/issues/75)





# [2.2.0](https://github.com/Lundalogik/lime-web-components/compare/v2.1.0...v2.2.0) (2019-12-20)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [2.1.0](https://github.com/Lundalogik/lime-web-components/compare/v2.0.0...v2.1.0) (2019-08-09)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [2.0.0](https://github.com/Lundalogik/lime-web-components/compare/v1.4.1...v2.0.0) (2019-07-04)


### Code Refactoring

* **platform:** add get method in favor of public properties ([5d0c903](https://github.com/Lundalogik/lime-web-components/commit/5d0c903))


### BREAKING CHANGES

* **platform:** Removed all public properties, services are now retrieved with the `get` method.
New services can be registered with the `register` method which can also be used by 3rd parties to
register new services on the platform. Core platform service names are exposed in the
`PlatformServiceName` enum.





## [1.4.1](https://github.com/Lundalogik/lime-web-components/compare/v1.4.0...v1.4.1) (2019-06-28)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [1.4.0](https://github.com/Lundalogik/lime-web-components/compare/v1.3.0...v1.4.0) (2019-06-24)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [1.3.0](https://github.com/Lundalogik/lime-web-components/compare/v1.2.8...v1.3.0) (2019-06-24)


### Features

* license under Apache-2.0 ([34b755e](https://github.com/Lundalogik/lime-web-components/commit/34b755e))





## [1.2.1](https://github.com/Lundalogik/lime-web-components/compare/v1.2.0...v1.2.1) (2019-06-19)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [1.2.0](https://github.com/Lundalogik/lime-web-components/compare/v1.1.0...v1.2.0) (2019-06-19)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





# [1.1.0](https://github.com/Lundalogik/lime-web-components/compare/v1.0.1...v1.1.0) (2019-06-05)

**Note:** Version bump only for package @limetech/lime-web-components-decorators





## [1.0.1](https://github.com/Lundalogik/lime-web-components/compare/v1.0.0...v1.0.1) (2019-05-29)


### Bug Fixes

* **decorators:** add missing exports ([cf60471](https://github.com/Lundalogik/lime-web-components/commit/cf60471))





# [1.0.0](https://github.com/Lundalogik/lime-web-components/compare/v0.1.0...v1.0.0) (2019-05-29)


### Features

* convert lime-web-component-interfaces to monorepo lime-web-components ([2266483](https://github.com/Lundalogik/lime-web-components/commit/2266483))
* rename packages to `@limetech/lime-web-components-<package-name>` ([25f7a9f](https://github.com/Lundalogik/lime-web-components/commit/25f7a9f))
