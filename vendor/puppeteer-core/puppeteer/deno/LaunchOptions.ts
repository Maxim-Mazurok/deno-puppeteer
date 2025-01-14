/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Launcher options that only apply to Chrome.
 *
 * @public
 */
export interface ChromeArgOptions {
  headless?: boolean;
  args?: string[];
  userDataDir?: string;
  devtools?: boolean;
}

/**
 * Generic launch options that can be passed when launching any browser.
 * @public
 */
export interface LaunchOptions {
  executablePath?: string;
  ignoreDefaultArgs?: boolean | string[];
  timeout?: number;
  env?: Record<string, string>;
}
