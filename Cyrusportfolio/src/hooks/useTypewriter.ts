import { useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 70,
  pauseDuration = 1500,
}: TypewriterOptions) {
  const [text, setText] = useState("");

  const wordIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex.current % words.length];

    const updateText = () => {
      setText((prev) =>
        isDeleting.current
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );

      // Pause when word is fully typed
      if (!isDeleting.current && text === currentWord) {
        timeoutRef.current = window.setTimeout(() => {
          isDeleting.current = true;
        }, pauseDuration);
        return;
      }

      // Move to next word
      if (isDeleting.current && text === "") {
        isDeleting.current = false;
        wordIndex.current += 1;
      }
    };

    timeoutRef.current = window.setTimeout(
      updateText,
      isDeleting.current ? deletingSpeed : typingSpeed
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
