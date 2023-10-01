/* global requirejs */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'app-that-excludes-mirage/config/environment';

export default class extends Controller {
  @service wifi;

  environment = ENV.environment;

  get mirageModules() {
    return Object.keys(requirejs.entries).filter((key) =>
      key.match('^ember-cli-mirage'),
    );
  }

  get otherIncludedModules() {
    return Object.keys(requirejs.entries).filter((key) => {
      return (
        key.match('^pretender') ||
        key.match('^lodash') ||
        key.match('initializers/ember-cli-mirage')
      );
    });
  }
}
