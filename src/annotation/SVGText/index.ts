import { Vector2 } from "three";
import { Component, SVGAnnotationStyle } from "../../base-types";
import { Components } from "../../core";

export class SVGText extends Component<SVGTextElement> {

    name: string = "SVGRectangle"
    enabled: boolean = true
    private _components: Components
    private _text = document.createElementNS("http://www.w3.org/2000/svg", "text")
    private _startPoint: Vector2 = new Vector2()

    constructor(components: Components, text?: string, startPoint?: Vector2) {
        super()
        this._components = components
        this._text.setAttribute("fill", "red");
        this._text.classList.add("text-2xl", "font-medium")
        this.text = text?? ""
        this.startPoint = startPoint?? this.startPoint
    }

    setStyle(style?: Partial<SVGAnnotationStyle>) {
        this._text.setAttribute("fill", style?.strokeColor?? "red")
    }

    set text(value: string) {
        this._text.textContent = value
    }

    get text() {
        return this._text.textContent?? ""
    }

    reset() {
        this.x = 0
        this.y = 0
    }

    clone() {
        return new SVGText(this._components, this.text, this.startPoint)
    }

    set x(value: number) {
        this._startPoint.x = value
        this._text.setAttribute("x", value.toString())
    }

    set y(value: number) {
        this._startPoint.y = value
        this._text.setAttribute("y", value.toString())
    }

    set startPoint(point: Vector2) {
        this.x = point.x
        this.y = point.y
    }

    get startPoint() {
        return this._startPoint
    }

    get(): SVGTextElement {
        return this._text
    }

}