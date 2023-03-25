import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the nbactions extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nbactions:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbactions is activated!');
  }
};

export default plugin;
