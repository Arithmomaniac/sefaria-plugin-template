import type { CustomElement } from "typed-custom-elements"

// Define types for client-zip
interface DownloadZipInput {
  name?: string;
  lastModified?: Date;
  input: Blob | Response | AsyncIterable<Uint8Array>;
}

declare global {
  interface Window {
    downloadZip: (files: (File | DownloadZipInput)[]) => Response;
  }
}

class SefariaPluginElement extends HTMLElement implements CustomElement {
  static get observedAttributes() {
    // "sref" is the refrerence string to the current location in the Sefaria app (e.g., "Genesis 1:1")
    return ['sref'];
  }

  /**
   * Dispatches a custom 'scrollToRef' event to scroll the main Sefaria app to a specified ref.
   * This is monitored by the Sefaria app, which does the scrolling.
  *  
  * @param targetRef - The reference string to scroll to (e.g., "Genesis 1:1")
   */
  private dispatchScrollToRef(targetRef: string) {
    const event = new CustomEvent('scrollToRef', {
      detail: { sref: targetRef },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  private shadowRootInstance: ShadowRoot;

  constructor() {
    super();
    this.shadowRootInstance = this.attachShadow({ mode: 'open' });
  }

  // Everything above this point will be needed in every plugin, more or less.
  // The following is a stub implementation of the plugin.

  private contentDiv: HTMLDivElement | null = null;
  private scrollRefInput: HTMLInputElement | null = null;
  private exportButton: HTMLButtonElement | null = null;

  /**
   * Creates and downloads a zip file containing the current sref information
   * This demonstrates the use of client-zip library as a replacement for JSZip
   */
  private async exportAsZip() {
    try {
      // Check if client-zip is loaded
      if (!window.downloadZip) {
        alert('client-zip library is not loaded. Please check the HTML script tag.');
        return;
      }

      const currentSref = this.getAttribute('sref') || 'No sref';
      const timestamp = new Date().toISOString();
      
      // Create file content
      const content = `Sefaria Plugin Export
======================
Current Reference: ${currentSref}
Exported At: ${timestamp}

This is a demonstration of using client-zip library
as a replacement for JSZip. client-zip is faster and
produces smaller bundle sizes.
      `;
      
      // Create a file object for the zip
      const file = new File([content], 'sefaria-export.txt', { type: 'text/plain' });
      
      // Create the zip using client-zip
      const blob = await window.downloadZip([file]).blob();
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sefaria-${currentSref.replace(/[^a-zA-Z0-9]/g, '-')}.zip`;
      link.click();
      
      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating zip file:', error);
      alert('Error creating zip file. See console for details.');
    }
  }

  connectedCallback() {
    // Create the content div if it doesn't exist
    if (!this.contentDiv) {
      this.contentDiv = document.createElement('div');
      this.shadowRootInstance.appendChild(this.contentDiv);
    }

    // Create scroll ref input and button if they don't exist
    if (!this.scrollRefInput) {
      // Create container div for input and button
      const container = document.createElement('div');

      // Create input
      this.scrollRefInput = document.createElement('input');
      this.scrollRefInput.type = 'text';
      this.scrollRefInput.placeholder = 'target sref';
      container.appendChild(this.scrollRefInput);

      // Create button
      const scrollButton = document.createElement('button');
      scrollButton.textContent = 'Trigger Scroll';
      scrollButton.addEventListener('click', () => {
        const targetRef = this.scrollRefInput?.value;
        if (targetRef) {
          this.dispatchScrollToRef(targetRef);
        }
      });
      container.appendChild(scrollButton);

      this.shadowRootInstance.appendChild(container);
    }

    // Create export button if it doesn't exist
    if (!this.exportButton) {
      const exportContainer = document.createElement('div');
      exportContainer.style.marginTop = '10px';
      
      this.exportButton = document.createElement('button');
      this.exportButton.textContent = 'Export as Zip (client-zip demo)';
      this.exportButton.addEventListener('click', () => this.exportAsZip());
      exportContainer.appendChild(this.exportButton);
      
      this.shadowRootInstance.appendChild(exportContainer);
    }

    // Set initial content
    const initialSref = this.getAttribute('sref');
    this.updateContent(initialSref);
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'sref' && newValue !== oldValue) {
      this.updateContent(newValue);
    }
  }

  // Helper method to update the div content
  private updateContent(sref: string | null) {
    if (this.contentDiv) {
      if (sref) {
        this.contentDiv.textContent = `Current sref: ${sref}`;
      } else {
        this.contentDiv.textContent = 'No sref provided.';
      }
    }
  }

  disconnectedCallback() {
    // Optional: Clean up if necessary
    this.contentDiv = null;
    this.scrollRefInput = null;
    this.exportButton = null;
  }
}

customElements.define('sefaria-plugin', SefariaPluginElement);
