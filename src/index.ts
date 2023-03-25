import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { INotebookTracker, NotebookActions } from '@jupyterlab/notebook';

/**
 * Initialization data for the nbactions extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nbactions:plugin',
  autoStart: true,
  requires: [INotebookTracker],
  activate: (app: JupyterFrontEnd, notebooks: INotebookTracker) => {
    console.log('JupyterLab extension nbactions is activated!');

    // Do something with the current notebook widget
    const currentNotebook = notebooks.currentWidget?.content;
    const sessionContext = notebooks.currentWidget?.sessionContext;
    if (!currentNotebook) {
      return;
    }

    // Jupyter.notebook.ncells()
    console.log(`We have ${currentNotebook.model?.cells?.length} cells`);
    // Also you can use .widgets, which is the array of cells widgets
    currentNotebook.widgets.length;

    // Change the active cell
    currentNotebook.activeCellIndex = 5;


    // Jupyter.notebook.cells_to_code([0])
    // Jupyter.notebook.cells_to_markdown([0])
    // Jupyter.notebook.get_cell(0).set_text(arguments[0])
    // Jupyter.notebook.get_cell(0).render()
    // Jupyter.notebook.get_cells()

    // Jupyter.notebook.insert_cell_below()
    NotebookActions.insertBelow(currentNotebook);

    // Jupyter.notebook.delete_cell(-1)
    NotebookActions.deleteCells(currentNotebook);

    // Select the first cell (selection does not have to be contiguous)
    currentNotebook.select(currentNotebook.widgets[0]);

    // Clear selection
    currentNotebook.deselectAll();
    // Clear selection with some error handling
    NotebookActions.deselectAll(currentNotebook);

    // Jupyter.notebook.scroll_cell_percent(arguments[0], arguments[1], 0)
    // Jupyter.notebook.toJSON()    // this is to download notebook
    // Jupyter.notebook.scroll_manager.is_cell_visible(Jupyter.notebook.get_cell(arguments[0]))

    // Jupyter.notebook.kernel.name
    sessionContext?.session?.kernel?.name;

    // Jupyter.kernelselector.kernelspecs
    // Jupyter.kernel_list.kernelspecs
    // Jupyter.kernelselector.set_kernel(arguments[0])

    // Jupyter.notebook.kernel.interrupt()
    sessionContext?.session?.kernel?.interrupt();

    // Jupyter.notebook.kernel.restart()
    sessionContext?.session?.kernel?.restart();

    // Jupyter.notebook.kernel.is_connected()
    sessionContext?.session?.kernel?.connectionStatus === 'connected';

    // Jupyter.notebook.kernel.complete(arguments[0], arguments[1], completeCallback)
    // Jupyter.notebook.kernel.inspect(arguments[0], arguments[1], inspectCallback)

    // Clear all outputs
    // Jupyter.notebook.clear_output() ???
    NotebookActions.clearAllOutputs(currentNotebook);

    // Clear selected outputs
    // Jupyter.notebook.clear_cells_outputs(Jupyter.notebook.get_selected_cells_indices())
    NotebookActions.clearOutputs(currentNotebook);

    // Jupyter.notebook.toggle_cells_outputs_scroll(Jupyter.notebook.get_selected_cells_indices())
    NotebookActions.enableOutputScrolling(currentNotebook);
    NotebookActions.disableOutputScrolling(currentNotebook);

    // Jupyter.notebook.execute_selected_cells()
    NotebookActions.run(currentNotebook, sessionContext);

    // Jupyter.notebook.save_checkpoint()
    // Jupyter.notebook.save_notebook()
    // Jupyter.notebook.scroll_manager.animation_speed = 0; Jupyter.notebook.scroll_manager.scroll_some(arguments[0])
    // Jupyter.notebook.rename(arguments[0])


    // Insert a cell about the current active cell
    NotebookActions.insertAbove(currentNotebook);
  }
};

export default plugin;
