// details 要素に name 属性を付与できるように型定義
declare namespace astroHTML.JSX {
    interface IntrinsicElements {
        details: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            name?: string;
        };
    }
}