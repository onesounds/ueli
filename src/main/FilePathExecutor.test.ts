import { FilePathExecutor } from "./FilePathExecutor";
import { SearchResultItemDummy } from "./SearchResultItemDummy";

describe(FilePathExecutor, () => {
    it("should succeed if the file path opener resolves", async (done) => {
        new FilePathExecutor(() => Promise.resolve())
            .execute(SearchResultItemDummy.empty())
            .then(() => done())
            .catch((error) => done(error));
    });

    it("should fail if the file path opener rejects", async (done) => {
        new FilePathExecutor(() => Promise.reject("Failed"))
            .execute(SearchResultItemDummy.empty())
            .then(() => done("Should have failed"))
            .catch(() => done());
    });
});
