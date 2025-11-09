import ScreenshotPreview from "../ScreenshotPreview";
import menuImg from "@assets/menu_1762647009330.jpg";

export default function ScreenshotPreviewExample() {
  return (
    <div className="p-8 bg-background">
      <ScreenshotPreview
        src={menuImg}
        alt="RINZO SEARCH Menu"
        className="w-full max-w-2xl"
      />
    </div>
  );
}
