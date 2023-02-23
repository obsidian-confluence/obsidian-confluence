import { Api } from "confluence.js";
export interface FilesToUpload extends Array<MarkdownFile> {}

export interface MarkdownFile {
	folderName: string;
	absoluteFilePath: string;
	fileName: string;
	contents: string;
	pageTitle: string;
}

export interface BinaryFile {
	filename: string;
	filePath: string;
	mimeType: string;
	contents: ArrayBuffer;
}

export interface LoaderAdaptor {
	getMarkdownFilesToUpload(): Promise<FilesToUpload>;
	readBinary(
		path: string,
		referencedFromFilePath: string
	): Promise<BinaryFile | false>;
}

export interface ConfluenceClient {
	content: Api.Content;
	space: Api.Space;
	contentAttachments: Api.ContentAttachments;
}
