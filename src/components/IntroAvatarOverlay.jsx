import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { profile } from "../data/profile";

const STORAGE_KEY = "introAvatarSeen";

const IntroAvatarOverlay = ({ onClose }) => {
  const { introAvatar } = profile;
  const durationSec = introAvatar.durationSeconds ?? 60;
  const durationMs = durationSec * 1000;
  const [remaining, setRemaining] = useState(durationSec);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef(null);
  const closedRef = useRef(false);

  const close = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;
    setClosing(true);
    if (introAvatar.showOncePerSession) {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setTimeout(onClose, 450);
  }, [introAvatar.showOncePerSession, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const started = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - started;
      const left = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      setRemaining(left);
      if (elapsed >= durationMs) {
        clearInterval(timerRef.current);
        close();
      }
    }, 250);

    return () => clearInterval(timerRef.current);
  }, [close, durationMs]);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.data?.type === "INTRO_COMPLETE") {
        close();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [close]);

  const progress = 100 - (remaining / durationSec) * 100;
  const minutes = Math.floor(remaining / 60);
  const seconds = (remaining % 60).toString().padStart(2, "0");

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950"
          role="dialog"
          aria-modal="true"
          aria-label="Introduction"
        >
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 sm:px-6">
            <div>
              <p className="text-sm font-medium text-white">
                Meet {profile.name.split(" ")[0]}
              </p>
              <p className="text-xs text-slate-400">
                {introAvatar.subtitle ?? "1-minute resume introduction"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm tabular-nums text-slate-400 sm:inline">
                Closes in {minutes}:{seconds}
              </span>
              <button
                type="button"
                onClick={close}
                className="flex items-center gap-1.5 rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <HiX className="text-lg" />
                Skip
              </button>
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            <iframe
              src={introAvatar.iframeSrc}
              title={`${profile.name} introduction`}
              className="h-full w-full border-0"
              allow="autoplay; microphone; camera"
              allowFullScreen
            />
          </div>

          <div className="border-t border-slate-800 px-4 py-2 sm:px-6">
            <div className="h-1 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "linear" }}
              />
            </div>
            <p className="mt-1 text-center text-xs text-slate-500 sm:hidden">
              Closes in {minutes}:{seconds}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const shouldShowIntro = () => {
  const { introAvatar } = profile;
  if (!introAvatar?.enabled) return false;
  if (!introAvatar.iframeSrc) return false;
  if (introAvatar.showOncePerSession && sessionStorage.getItem(STORAGE_KEY)) {
    return false;
  }
  return true;
};

export default IntroAvatarOverlay;
