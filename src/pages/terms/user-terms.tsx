import axios from "axios";
import { BlockMap, ExtendedRecordMap } from "notion-types";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { styled } from "styled-components";
import "react-notion-x/src/styles.css";
import { Button } from "@/components/common/button";
import { useNavigate } from "react-router-dom";

export const UserTermsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notionData, setNotionData] = useState<ExtendedRecordMap>();

  const navigate = useNavigate();

  useEffect(() => {
    const getNotion = async () => {
      setIsLoading(true);
      await axios
        .get(
          "https://notion-api.splitbee.io/v1/page/v-10efe2c167c54b05ac6a81e813e6f76e?pvs=4",
        )
        .then(({ data }) => {
          setNotionData({
            block: data as BlockMap,
            space: {},
            collection: {},
            collection_view: {},
            notion_user: {},
            collection_query: {},
          } as unknown as ExtendedRecordMap);
        })
        .catch((err) => console.log(err));
    };

    void getNotion();
    setIsLoading(false);
  }, []);

  console.log(notionData);
  return (
    <Layout>
      <Button onClick={() => navigate("/mypage")}>이전</Button>

      {!isLoading && (
        <NotionRenderer
          recordMap={notionData!}
          fullPage={true}
          darkMode={false}
        />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin-top: 30px;
  padding: 0 20px;
  overflow: hidden;
  & .notion-title {
    font-size: 1.8rem;
  }
  .notion {
    height: 100%;
  }
  .notion-page-no-cover {
    margin-top: 20px !important;
  }
  .notion-header {
    display: none;
  }
  .notion-page,
  .notion-page-content {
    height: 100%;
    overflow: hidden;
  }
  & .notion-page-content-inner {
    overflow: auto;
  }
`;
