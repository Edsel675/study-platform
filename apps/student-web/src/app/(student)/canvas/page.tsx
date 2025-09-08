import { WidgetRenderer } from "@study/widgets";
import type { Widget } from "@study/types";

const demo: Widget[] = [
  { id:"1", type:"Card", title:"Bienvenida", content:"Aprendamos con el canvas interactivo." },
  { id:"2", type:"QuizInline", question:"2 + 2 = ?", options:["3","4","5"], answerIndex:1 },
  { id:"3", type:"Stepper", title:"Resolver x+2=5", steps:[
    { title:"Paso 1", content:"x + 2 = 5" },
    { title:"Paso 2", content:"x = 5 - 2" },
    { title:"Paso 3", content:"x = 3" }
  ] }
];

export default function Page() {
  return <main className="p-6 space-y-4">
    {demo.map(w => <WidgetRenderer key={w.id} widget={w} />)}
  </main>;
}
