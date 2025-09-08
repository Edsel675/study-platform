import React from "react";
import type { Widget } from "@study/types";

export function WidgetRenderer({ widget }: { widget: Widget }) {
  switch (widget.type) {
    case "Card":
      return <div className="p-4 rounded-xl shadow"><h3>{widget.title}</h3><p>{(widget as any).content}</p></div>;
    case "QuizInline":
      const q = widget as any;
      return <div className="p-4 rounded-xl shadow"><h3>{q.title ?? "Quiz"}</h3><p>{q.question}</p><ol>{q.options.map((o:string,i:number)=><li key={i}>{o}</li>)}</ol></div>;
    case "Stepper":
      const s = widget as any;
      return <div className="p-4 rounded-xl shadow"><h3>{s.title ?? "Paso a paso"}</h3><ol>{s.steps.map((st:any,i:number)=><li key={i}><strong>{st.title}</strong>: {st.content}</li>)}</ol></div>;
    default:
      return <pre>Widget no soportado</pre>;
  }
}
