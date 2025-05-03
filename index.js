/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!******************************!*\
  !*** ./src/harness/index.ts ***!
  \******************************/

document.addEventListener('DOMContentLoaded', () => {
    const srefButton = document.getElementById('sref-button');
    const srefInput = document.getElementById('sref');
    const scrollLog = document.getElementById('scroll-log');
    const pluginElement = document.querySelector('sefaria-plugin');
    if (srefButton && srefInput && pluginElement && scrollLog) {
        // Listen for sref updates
        srefButton.addEventListener('click', () => {
            const sref = srefInput.value;
            if (sref) {
                pluginElement.setAttribute('sref', sref);
            }
        });
        // Listen for scrollToRef events
        pluginElement.addEventListener('scrollToRef', (event) => {
            const customEvent = event;
            const sref = customEvent.detail.sref;
            const timestamp = new Date().toLocaleTimeString();
            const logMessage = `[${timestamp}] scrollToRef called with: ${sref}\n`;
            scrollLog.value = logMessage + scrollLog.value;
        });
    }
    else {
        console.error('Required elements not found for harness setup.');
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFxQixDQUFDO0lBQ3RFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUF3QixDQUFDO0lBQy9FLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUUvRCxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksYUFBYSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3hELDBCQUEwQjtRQUMxQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN0QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzdCLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUMzRCxNQUFNLFdBQVcsR0FBRyxLQUFvQixDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNsRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsOEJBQThCLElBQUksSUFBSSxDQUFDO1lBQ3ZFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNwRSxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWZhcmlhLXBsdWdpbi10ZW1wbGF0ZS8uL3NyYy9oYXJuZXNzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgc3JlZkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcmVmLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNyZWZJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcmVmJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBzY3JvbGxMb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLWxvZycpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgY29uc3QgcGx1Z2luRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlZmFyaWEtcGx1Z2luJyk7XG5cbiAgICBpZiAoc3JlZkJ1dHRvbiAmJiBzcmVmSW5wdXQgJiYgcGx1Z2luRWxlbWVudCAmJiBzY3JvbGxMb2cpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBzcmVmIHVwZGF0ZXNcbiAgICAgICAgc3JlZkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyZWYgPSBzcmVmSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoc3JlZikge1xuICAgICAgICAgICAgICAgIHBsdWdpbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmVmJywgc3JlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3Igc2Nyb2xsVG9SZWYgZXZlbnRzXG4gICAgICAgIHBsdWdpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsVG9SZWYnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IGV2ZW50IGFzIEN1c3RvbUV2ZW50O1xuICAgICAgICAgICAgY29uc3Qgc3JlZiA9IGN1c3RvbUV2ZW50LmRldGFpbC5zcmVmO1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ01lc3NhZ2UgPSBgWyR7dGltZXN0YW1wfV0gc2Nyb2xsVG9SZWYgY2FsbGVkIHdpdGg6ICR7c3JlZn1cXG5gO1xuICAgICAgICAgICAgc2Nyb2xsTG9nLnZhbHVlID0gbG9nTWVzc2FnZSArIHNjcm9sbExvZy52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWlyZWQgZWxlbWVudHMgbm90IGZvdW5kIGZvciBoYXJuZXNzIHNldHVwLicpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9