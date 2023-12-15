import PDFMerger from 'pdf-merger-js/browser';

export async function mergeAndDownloadPDFs(files: File[]) {
    const merger = new PDFMerger();
    for (const file of files) {
        await merger.add(file);
    }
    const mergedPdf = await merger.saveAsBlob();
    const url = URL.createObjectURL(mergedPdf);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'test.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}