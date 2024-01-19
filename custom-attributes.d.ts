// details 要素に name 属性を付与できるように型定義
declare namespace astroHTML.JSX {
    interface HTMLAttributes {
        'name'?: string;
    }
}