import type { LineElement } from "rehype-pretty-code"
import rehypePrettyCode from "rehype-pretty-code"
import type { Transformer } from "unified"
import { visit } from "unist-util-visit"

import type { UnistNode, UnistTree } from "@/types/unist"

export function rehypeCodeRawString(): Transformer {
  return (tree) => {
    visit(tree, (node: UnistNode) => {
      if (node?.type === "element" && node?.tagName === "pre") {
        if (!node.children || node.children.length === 0) {
          return
        }

        const codeEl = node.children[0]
        if (codeEl.tagName !== "code") {
          return
        }

        node.__rawString__ = codeEl.children?.[0].value
      }
    })
  }
}

export function rehypeHighlightCode() {
  return rehypePrettyCode({
    theme: {
      dark: "vesper",
      light: "github-light-default",
    },
    keepBackground: false,
    onVisitLine(node: LineElement) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }]
      }
    },
  })
}

export function rehypeHighlightCodeRawString(): Transformer {
  return (tree) => {
    visit(tree, (node: UnistNode) => {
      if (node?.type === "element" && node?.tagName === "figure") {
        if (
          !node.properties ||
          !("data-rehype-pretty-code-figure" in node.properties)
        ) {
          return
        }

        if (!node.children || node.children.length === 0) {
          return
        }

        const preElement = node.children.at(-1)
        if (!preElement || preElement.tagName !== "pre") {
          return
        }

        preElement.properties = {
          ...preElement.properties,
          __withMeta__: node.children.at(0)?.tagName === "figcaption",
          __rawString__: node.__rawString__,
        }
      }
    })
  }
}
