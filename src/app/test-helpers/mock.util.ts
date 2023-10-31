// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { Component, Directive, Type, ValueProvider } from '@angular/core';
import { Observer } from 'rxjs';
import SpyObjMethodNames = jasmine.SpyObjMethodNames;

export function mockDirective(options: Component): unknown {
  const metadata: Directive = {
    selector: options.selector,
    inputs: options.inputs,
    outputs: options.outputs,
  };
  return Directive(metadata)(class _ {});
}

export function mockProvider<T>(type: Type<T>, spyMethods?: SpyObjMethodNames<T>): ValueProvider {
  if (spyMethods !== undefined) {
    return {
      provide: type,
      useValue: jasmine.createSpyObj<T>(spyMethods),
    };
  } else {
    return {
      provide: type,
      useValue: {},
    };
  }
}

// Workaround for creating spy methods along with spy properties (https://github.com/jasmine/jasmine/issues/1442)
export function setMockProperty<T>(object: T, property: keyof T, value: unknown): void {
  Object.defineProperty(object, property, { get: () => value });
}

/**
 * Creates a mock observer to test observable behavior.
 * @example
 *
 * const subscribeSpy: jasmine.SpyObj<Observer<void>> = createMockObserver();
 * of('some value').subscribe(subscribeSpy);
 * expect(subscribeSpy.next).toHaveBeenCalledWith('some value');
 * expect(subscribeSpy.complete).toHaveBeenCalled();
 */
export function createMockObserver<T>(): jasmine.SpyObj<Observer<T>> {
  return jasmine.createSpyObj<Observer<T>>('Observer', ['next', 'error', 'complete']);
}

// This method is to make it explicit that we are setting a readonly var
export function setReadonlyMockVariable(service: unknown, varName: string, value: unknown): void {
  service[varName] = value;
}
