/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {browser, by, element, protractor} from 'protractor';

import {verifyNoBrowserErrors} from '../../../../e2e_util/e2e_util';

describe('WebWorkers Todo', function() {
  afterEach(() => {
    verifyNoBrowserErrors();
    browser.ignoreSynchronization = false;
  });

  const URL = '/';

  it('should bootstrap', () => {
    // This test can't wait for Angular as Testability is not available when using WebWorker
    browser.ignoreSynchronization = true;
    browser.get(URL);

    waitForBootstrap();
    expect(element(by.css('#todoapp header')).getText()).toEqual('todos');
  });
});

function waitForBootstrap(): void {
  browser.wait(protractor.until.elementLocated(by.css('todo-app #todoapp')), 15000);
}
