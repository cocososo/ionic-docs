/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  CodeBlock as CodeBlock
} from './components/code-block/code-block';

declare global {
  interface HTMLCodeBlockElement extends CodeBlock, HTMLStencilElement {
  }
  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    "code-block": HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    "code-block": HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "code-block": JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      language?: string;
    }
  }
}


import {
  CtrlDropdown as CtrlDropdown
} from './components/ctrl-dropdown/ctrl-dropdown';

declare global {
  interface HTMLCtrlDropdownElement extends CtrlDropdown, HTMLStencilElement {
  }
  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "ctrl-dropdown": HTMLCtrlDropdownElement;
  }
  interface ElementTagNameMap {
    "ctrl-dropdown": HTMLCtrlDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ctrl-dropdown": JSXElements.CtrlDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CtrlDropdownAttributes extends HTMLAttributes {
      autoClose?: boolean;
      autoCloseDelay?: number;
      items?: any[];
      onSelect?: Function;
      renderer?: Function;
      setInitial?: Function;
    }
  }
}


import {
  DocLoader as DocLoader
} from './components/doc-loader/doc-loader';

declare global {
  interface HTMLDocLoaderElement extends DocLoader, HTMLStencilElement {
  }
  var HTMLDocLoaderElement: {
    prototype: HTMLDocLoaderElement;
    new (): HTMLDocLoaderElement;
  };
  interface HTMLElementTagNameMap {
    "doc-loader": HTMLDocLoaderElement;
  }
  interface ElementTagNameMap {
    "doc-loader": HTMLDocLoaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "doc-loader": JSXElements.DocLoaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DocLoaderAttributes extends HTMLAttributes {
      path?: string;
    }
  }
}


import {
  IonicDocs as IonicDocs
} from './components/ionic-docs/ionic-docs';

declare global {
  interface HTMLIonicDocsElement extends IonicDocs, HTMLStencilElement {
  }
  var HTMLIonicDocsElement: {
    prototype: HTMLIonicDocsElement;
    new (): HTMLIonicDocsElement;
  };
  interface HTMLElementTagNameMap {
    "ionic-docs": HTMLIonicDocsElement;
  }
  interface ElementTagNameMap {
    "ionic-docs": HTMLIonicDocsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ionic-docs": JSXElements.IonicDocsAttributes;
    }
  }
  namespace JSXElements {
    export interface IonicDocsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteContent as SiteContent
} from './components/site-content/site-content';

declare global {
  interface HTMLSiteContentElement extends SiteContent, HTMLStencilElement {
  }
  var HTMLSiteContentElement: {
    prototype: HTMLSiteContentElement;
    new (): HTMLSiteContentElement;
  };
  interface HTMLElementTagNameMap {
    "site-content": HTMLSiteContentElement;
  }
  interface ElementTagNameMap {
    "site-content": HTMLSiteContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-content": JSXElements.SiteContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteContentAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteHeader as SiteHeader
} from './components/site-header/site-header';

declare global {
  interface HTMLSiteHeaderElement extends SiteHeader, HTMLStencilElement {
  }
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  interface ElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-header": JSXElements.SiteHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteMenu as SiteMenu
} from './components/site-menu/site-menu';

declare global {
  interface HTMLSiteMenuElement extends SiteMenu, HTMLStencilElement {
  }
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  interface ElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-menu": JSXElements.SiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteMenuAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SitePreviewApp as SitePreviewApp
} from './components/site-preview-app/site-preview-app';

declare global {
  interface HTMLSitePreviewAppElement extends SitePreviewApp, HTMLStencilElement {
  }
  var HTMLSitePreviewAppElement: {
    prototype: HTMLSitePreviewAppElement;
    new (): HTMLSitePreviewAppElement;
  };
  interface HTMLElementTagNameMap {
    "site-preview-app": HTMLSitePreviewAppElement;
  }
  interface ElementTagNameMap {
    "site-preview-app": HTMLSitePreviewAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-preview-app": JSXElements.SitePreviewAppAttributes;
    }
  }
  namespace JSXElements {
    export interface SitePreviewAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteSearch as SiteSearch
} from './components/site-search/site-search';

declare global {
  interface HTMLSiteSearchElement extends SiteSearch, HTMLStencilElement {
  }
  var HTMLSiteSearchElement: {
    prototype: HTMLSiteSearchElement;
    new (): HTMLSiteSearchElement;
  };
  interface HTMLElementTagNameMap {
    "site-search": HTMLSiteSearchElement;
  }
  interface ElementTagNameMap {
    "site-search": HTMLSiteSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-search": JSXElements.SiteSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteSearchAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TableOfContents as TableOfContents
} from './components/table-of-contents/table-of-contents';

declare global {
  interface HTMLTableOfContentsElement extends TableOfContents, HTMLStencilElement {
  }
  var HTMLTableOfContentsElement: {
    prototype: HTMLTableOfContentsElement;
    new (): HTMLTableOfContentsElement;
  };
  interface HTMLElementTagNameMap {
    "table-of-contents": HTMLTableOfContentsElement;
  }
  interface ElementTagNameMap {
    "table-of-contents": HTMLTableOfContentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "table-of-contents": JSXElements.TableOfContentsAttributes;
    }
  }
  namespace JSXElements {
    export interface TableOfContentsAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
