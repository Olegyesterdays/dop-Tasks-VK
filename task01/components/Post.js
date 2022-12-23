import {Paragraph} from "./paragraph/paragraph.js"

export class Post {
    
    constructor(root) {
        this.root = root;
        this.contentList = {
            headingText: 'Заголовок поста',
            contentText: 'Текст постаааааааааааааааааааааааааааа 1'
        }
    }

    render() {
		const containerPost = document.createElement('div');
        containerPost.classList.add('containerPost');

        const paragraph = new Paragraph(containerPost, headingText, contentText);
        paragraph.render();

        this.root.append(containerPost);
    }
}
