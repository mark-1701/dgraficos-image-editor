import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { createDemoApp } from 'polotno/polotno-app';
import Workspace from 'polotno/canvas/workspace';
import { createStore } from 'polotno/model/store';

import '@blueprintjs/core/lib/css/blueprint.css';

const Editor = () => {
  // const store = createStore();
  

    const { store } = createDemoApp({
    container: document.getElementById('root'),
    key: 'dP1fvhjijFfJ6E47-e9n', // you can create it here: https://polotno.com/cabinet/
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true
  });
  

  const page = store.addPage();

  // page.addElement({
  //   x: 50,
  //   y: 50,
  //   type: 'text',
  //   fill: 'black',
  //   text: 'hello'
  // });

  return <Workspace store={store} />;

  // return (
  //   <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
  //     {/* Panel lateral con las herramientas de edición */}
  //     <SidePanelWrap store={store} />

  //     {/* El área de trabajo para editar */}
  //     <WorkspaceWrap store={store} />
  //   </PolotnoContainer>
  // );
};

export default Editor;
