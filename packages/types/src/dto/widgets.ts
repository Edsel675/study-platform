export type WidgetType = "Card" | "QuizInline" | "Stepper";

export interface BaseWidget {
  id: string;
  type: WidgetType;
  title?: string;
  meta?: Record<string, any>;
}

export interface CardWidget extends BaseWidget {
  type: "Card";
  content: string; // markdown
}

export interface QuizInlineWidget extends BaseWidget {
  type: "QuizInline";
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export interface StepperWidget extends BaseWidget {
  type: "Stepper";
  steps: { title: string; content: string }[];
}

export type Widget = CardWidget | QuizInlineWidget | StepperWidget;
