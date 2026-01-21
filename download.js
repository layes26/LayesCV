// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create download button
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = '📥 Download PDF';
    downloadBtn.className = 'download-btn';
    downloadBtn.onclick = downloadCV;

    // Add button to body
    document.body.appendChild(downloadBtn);

    // Add CSS styles for the button
    const style = document.createElement('style');
    style.textContent = `
        .download-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 24px;
            background-color: #4e4e52;
            color: white;
            border: 2px solid #080224;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0px 2px 5px rgba(7, 7, 7, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        .download-btn:hover {
            background-color: #080224;
            transform: translateY(-2px);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .download-btn:active {
            transform: translateY(0px);
        }
        
        @media (max-width: 768px) {
            .download-btn {
                top: 10px;
                right: 10px;
                padding: 10px 18px;
                font-size: 14px;
            }
        }
    `;
    document.head.appendChild(style);
});

// Function to download CV as PDF
function downloadCV() {
    const element = document.querySelector('.container');

    const opt = {
        margin: 10,
        filename: 'CV of MR. Layes.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save();
}