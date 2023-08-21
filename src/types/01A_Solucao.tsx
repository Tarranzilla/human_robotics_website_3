export default interface SolutionType {
    domId: string;

    id: number;
    name: string;
    class: string;
    description: string;
    imgSrc: Array<string>;
    videoSrc: Array<string>;

    relatedProducts: Array<number>;
}
