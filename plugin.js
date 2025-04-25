/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./plugin.ts ***!
  \*******************/

// Register as a web component
class SefariaPluginElement extends HTMLElement {
    static get observedAttributes() {
        return ['sref'];
    }
    constructor() {
        super();
        this.contentDiv = null;
        // Ensure shadow root is created early
        this.shadowRootInstance = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Create the content div if it doesn't exist
        if (!this.contentDiv) {
            this.contentDiv = document.createElement('div');
            this.shadowRootInstance.appendChild(this.contentDiv);
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
    }
}
customElements.define('sefaria-plugin', SefariaPluginElement);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhCQUE4QjtBQUM5QixNQUFNLG9CQUFxQixTQUFRLFdBQVc7SUFDNUMsTUFBTSxLQUFLLGtCQUFrQjtRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUtEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFKRixlQUFVLEdBQTBCLElBQUksQ0FBQztRQUsvQyxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCxzQkFBc0I7UUFDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxJQUFZLEVBQUUsUUFBdUIsRUFBRSxRQUF1QjtRQUNyRixJQUFJLElBQUksS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBMEM7SUFDbEMsYUFBYSxDQUFDLElBQW1CO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3hELENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlZmFyaWEtcGx1Z2luLXRlbXBsYXRlLy4vcGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZ2lzdGVyIGFzIGEgd2ViIGNvbXBvbmVudFxuY2xhc3MgU2VmYXJpYVBsdWdpbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3NyZWYnXTtcbiAgfVxuXG4gIHByaXZhdGUgY29udGVudERpdjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzaGFkb3dSb290SW5zdGFuY2U6IFNoYWRvd1Jvb3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBFbnN1cmUgc2hhZG93IHJvb3QgaXMgY3JlYXRlZCBlYXJseVxuICAgIHRoaXMuc2hhZG93Um9vdEluc3RhbmNlID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgZGl2IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoIXRoaXMuY29udGVudERpdikge1xuICAgICAgdGhpcy5jb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3RJbnN0YW5jZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnREaXYpO1xuICAgIH1cblxuICAgIC8vIFNldCBpbml0aWFsIGNvbnRlbnRcbiAgICBjb25zdCBpbml0aWFsU3JlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmVmJyk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KGluaXRpYWxTcmVmKTtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLCBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmIChuYW1lID09PSAnc3JlZicgJiYgbmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBkaXYgY29udGVudFxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoc3JlZjogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnREaXYpIHtcbiAgICAgIGlmIChzcmVmKSB7XG4gICAgICAgIHRoaXMuY29udGVudERpdi50ZXh0Q29udGVudCA9IGBDdXJyZW50IHNyZWY6ICR7c3JlZn1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50RGl2LnRleHRDb250ZW50ID0gJ05vIHNyZWYgcHJvdmlkZWQuJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBPcHRpb25hbDogQ2xlYW4gdXAgaWYgbmVjZXNzYXJ5XG4gICAgdGhpcy5jb250ZW50RGl2ID0gbnVsbDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NlZmFyaWEtcGx1Z2luJywgU2VmYXJpYVBsdWdpbkVsZW1lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9