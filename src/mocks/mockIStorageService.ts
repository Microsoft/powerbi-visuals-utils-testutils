/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.utils.test.mocks {
    // powerbi
    import IPromise = powerbi.IPromise;

    export interface ILocalVisualStorageService {
        get(key: string): IPromise<string>;
        set(key: string, data: string): IPromise<number>;
        remove(key: string): void;
    }

    export class MockIStorageService implements ILocalVisualStorageService {
        constructor() {

        }

        public get(key: string): IPromise<string> {
            let deferred: JQueryDeferred<any> = $.Deferred();

            const data: string = localStorage.getItem(key);
            deferred.resolve(data);

            return deferred as any;
        };

        public set(key: string, data: string): IPromise<number> {
            let deferred: JQueryDeferred<any> = $.Deferred();

            localStorage.setItem(key, data)
            deferred.resolve(data.length);

            return deferred as any;
        };

        public remove(key: string): void {
            localStorage.removeItem(key);
        };
    }
}