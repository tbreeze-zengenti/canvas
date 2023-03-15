import { createDomWriterFactory } from '@contensis/canvas-dom';
import { h } from './html';

const {
    createWriter,
    Anchor,
    Code,
    Component,
    Divider,
    Fragment,
    Image,
    InlineEntry,
    Heading,
    Link,
    List,
    ListItem,
    Panel,
    Paragraph,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow,

    InlineCode,
    Delete,
    Emphasis,
    Insert,
    Keyboard,
    Linebreak,
    Mark,
    Strong,
    Strikethrough,
    Subscript,
    Superscript,
    Underline,
    Variable
} = createDomWriterFactory(
    h, 
    h.fragment,
    h.text
);

export {
    h,
    
    createWriter,
    Anchor,
    Code,
    Component,
    Divider,
    Fragment,
    Image,
    InlineEntry,
    Heading,
    Link,
    List,
    ListItem,
    Panel,
    Paragraph,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow,

    InlineCode,
    Delete,
    Emphasis,
    Insert,
    Keyboard,
    Linebreak,
    Mark,
    Strong,
    Strikethrough,
    Subscript,
    Superscript,
    Underline,
    Variable
};
