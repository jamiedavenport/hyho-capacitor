import { choosePhoto } from "./upload";
import { Capacitor, Plugins } from "@capacitor/core";

const { Camera } = Plugins;

describe("upload", () => {
  beforeEach(() => {
    (Capacitor.isPluginAvailable as jest.Mock).mockReturnValue(true);
  });

  describe("choosePhoto", () => {
    it("should throw an error when the camera is not supported", async () => {
      (Capacitor.isPluginAvailable as jest.Mock).mockReturnValueOnce(false);

      await expect(choosePhoto()).rejects.toMatchInlineSnapshot(
        `[Error: Photo picker is not supported]`
      );
    });

    it("should throw an error when the image data is missing", async () => {
      (Camera.getPhoto as jest.Mock).mockResolvedValueOnce({});

      await expect(choosePhoto()).rejects.toMatchInlineSnapshot(
        `[Error: Image data was undefined]`
      );
    });

    it("should return a photo data", async () => {
      const data = "knjhgcfhbjuhigyftghvjiuygtghu76tyrfcghbjiouytfcghbjkiuhgyt";

      (Camera.getPhoto as jest.Mock).mockResolvedValueOnce({
        base64String: data,
      });

      expect(await choosePhoto()).toBe(data);
    });
  });
});
