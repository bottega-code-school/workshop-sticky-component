import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
  text: string;
  variant?: "code" | "text";
};
export default function HighlightText({ text, variant = "text" }: Props) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const handleHighlight = (e: React.MouseEvent<HTMLPreElement, MouseEvent>) => {
    const range = document.createRange();
    range.selectNode(e.currentTarget);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  };

  if (variant === "text") {
    return (
      <div className="text-highlight-container">
        <div className={`alert ${copied ? "" : "inactive"}`}>Copied!</div>
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <div className="highlighted-text">{text}</div>
        </CopyToClipboard>
      </div>
    );
  } else {
    return (
      <div className="code-embed-container">
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <button>{copied ? "Copied!" : "Copy"}</button>
        </CopyToClipboard>

        <pre onMouseUp={handleHighlight} style={{ cursor: "pointer" }}>
          {text}
        </pre>
      </div>
    );
  }
}
