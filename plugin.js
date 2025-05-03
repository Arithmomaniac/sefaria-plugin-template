/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/plugin/plugin.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
class SefariaPluginElement extends HTMLElement {
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
    dispatchScrollToRef(targetRef) {
        const event = new CustomEvent('scrollToRef', {
            detail: { sref: targetRef },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    constructor() {
        super();
        // Everything above this point will be needed in every plugin, more or less.
        // The following is a stub implementation of the plugin.
        this.contentDiv = null;
        this.scrollRefInput = null;
        this.shadowRootInstance = this.attachShadow({ mode: 'open' });
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
                var _a;
                const targetRef = (_a = this.scrollRefInput) === null || _a === void 0 ? void 0 : _a.value;
                if (targetRef) {
                    this.dispatchScrollToRef(targetRef);
                }
            });
            container.appendChild(scrollButton);
            this.shadowRootInstance.appendChild(container);
        }
        // Set initial content
        const initialSref = this.getAttribute('sref');
        this.updateContent(initialSref);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'sref' && newValue !== oldValue) {
            this.updateContent(newValue);
        }
    }
    // Helper method to update the div content
    updateContent(sref) {
        if (this.contentDiv) {
            if (sref) {
                this.contentDiv.textContent = `Current sref: ${sref}`;
            }
            else {
                this.contentDiv.textContent = 'No sref provided.';
            }
        }
    }
    disconnectedCallback() {
        // Optional: Clean up if necessary
        this.contentDiv = null;
        this.scrollRefInput = null;
    }
}
customElements.define('sefaria-plugin', SefariaPluginElement);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxNQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBMEM7SUFDbEMsYUFBYSxDQUFDLElBQW1CO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3hELENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlZmFyaWEtcGx1Z2luLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlZmFyaWEtcGx1Z2luLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2VmYXJpYS1wbHVnaW4tdGVtcGxhdGUvLi9zcmMvcGx1Z2luL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBDdXN0b21FbGVtZW50IH0gZnJvbSBcInR5cGVkLWN1c3RvbS1lbGVtZW50c1wiXG5cbmNsYXNzIFNlZmFyaWFQbHVnaW5FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBDdXN0b21FbGVtZW50IHtcbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgLy8gXCJzcmVmXCIgaXMgdGhlIHJlZnJlcmVuY2Ugc3RyaW5nIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBTZWZhcmlhIGFwcCAoZS5nLiwgXCJHZW5lc2lzIDE6MVwiKVxuICAgIHJldHVybiBbJ3NyZWYnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tICdzY3JvbGxUb1JlZicgZXZlbnQgdG8gc2Nyb2xsIHRoZSBtYWluIFNlZmFyaWEgYXBwIHRvIGEgc3BlY2lmaWVkIHJlZi5cbiAgICogVGhpcyBpcyBtb25pdG9yZWQgYnkgdGhlIFNlZmFyaWEgYXBwLCB3aGljaCBkb2VzIHRoZSBzY3JvbGxpbmcuXG4gICogIFxuICAqIEBwYXJhbSB0YXJnZXRSZWYgLSBUaGUgcmVmZXJlbmNlIHN0cmluZyB0byBzY3JvbGwgdG8gKGUuZy4sIFwiR2VuZXNpcyAxOjFcIilcbiAgICovXG4gIHByaXZhdGUgZGlzcGF0Y2hTY3JvbGxUb1JlZih0YXJnZXRSZWY6IHN0cmluZykge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzY3JvbGxUb1JlZicsIHtcbiAgICAgIGRldGFpbDogeyBzcmVmOiB0YXJnZXRSZWYgfSxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIHNoYWRvd1Jvb3RJbnN0YW5jZTogU2hhZG93Um9vdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hhZG93Um9vdEluc3RhbmNlID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICAvLyBFdmVyeXRoaW5nIGFib3ZlIHRoaXMgcG9pbnQgd2lsbCBiZSBuZWVkZWQgaW4gZXZlcnkgcGx1Z2luLCBtb3JlIG9yIGxlc3MuXG4gIC8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzdHViIGltcGxlbWVudGF0aW9uIG9mIHRoZSBwbHVnaW4uXG5cbiAgcHJpdmF0ZSBjb250ZW50RGl2OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNjcm9sbFJlZklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IGRpdiBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgaWYgKCF0aGlzLmNvbnRlbnREaXYpIHtcbiAgICAgIHRoaXMuY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5zaGFkb3dSb290SW5zdGFuY2UuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RGl2KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc2Nyb2xsIHJlZiBpbnB1dCBhbmQgYnV0dG9uIGlmIHRoZXkgZG9uJ3QgZXhpc3RcbiAgICBpZiAoIXRoaXMuc2Nyb2xsUmVmSW5wdXQpIHtcbiAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZGl2IGZvciBpbnB1dCBhbmQgYnV0dG9uXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0XG4gICAgICB0aGlzLnNjcm9sbFJlZklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRoaXMuc2Nyb2xsUmVmSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgIHRoaXMuc2Nyb2xsUmVmSW5wdXQucGxhY2Vob2xkZXIgPSAndGFyZ2V0IHNyZWYnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsUmVmSW5wdXQpO1xuXG4gICAgICAvLyBDcmVhdGUgYnV0dG9uXG4gICAgICBjb25zdCBzY3JvbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNjcm9sbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdUcmlnZ2VyIFNjcm9sbCc7XG4gICAgICBzY3JvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFJlZiA9IHRoaXMuc2Nyb2xsUmVmSW5wdXQ/LnZhbHVlO1xuICAgICAgICBpZiAodGFyZ2V0UmVmKSB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaFNjcm9sbFRvUmVmKHRhcmdldFJlZik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNjcm9sbEJ1dHRvbik7XG5cbiAgICAgIHRoaXMuc2hhZG93Um9vdEluc3RhbmNlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gU2V0IGluaXRpYWwgY29udGVudFxuICAgIGNvbnN0IGluaXRpYWxTcmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyZWYnKTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoaW5pdGlhbFNyZWYpO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKG5hbWUgPT09ICdzcmVmJyAmJiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudChuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgdGhlIGRpdiBjb250ZW50XG4gIHByaXZhdGUgdXBkYXRlQ29udGVudChzcmVmOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuY29udGVudERpdikge1xuICAgICAgaWYgKHNyZWYpIHtcbiAgICAgICAgdGhpcy5jb250ZW50RGl2LnRleHRDb250ZW50ID0gYEN1cnJlbnQgc3JlZjogJHtzcmVmfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnTm8gc3JlZiBwcm92aWRlZC4nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIE9wdGlvbmFsOiBDbGVhbiB1cCBpZiBuZWNlc3NhcnlcbiAgICB0aGlzLmNvbnRlbnREaXYgPSBudWxsO1xuICAgIHRoaXMuc2Nyb2xsUmVmSW5wdXQgPSBudWxsO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2VmYXJpYS1wbHVnaW4nLCBTZWZhcmlhUGx1Z2luRWxlbWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=