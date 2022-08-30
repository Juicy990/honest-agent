import React from "react";
import ButtonAdd from "../buttonAdd/ButtonAdd";
import { TitleItem } from "../titleItem/TitleItem";
import { ErrorBlock } from "../errorBlock/ErrorBlock";
import { LoadingBlock } from "../loadingBlock/LoadingBlock";
import { ImageItem } from "../imageItem/ImageItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import {
  removeImage,
  uploadImage,
} from "../../redux/store/reducers/imageReducer/ImageActions";
import { companyApi } from "../../redux/services/CompanyService";
import moment from "moment";
import "moment/locale/ru";

import "./ImageBlock.scss";

export const ImageBlock: React.FC = () => {
  const { data: company } = companyApi.useFetchCompanyQuery(12);

  const dispatch = useAppDispatch();
  const { file, isLoading, error } = useAppSelector(
    (state) => state.imageReducer
  );

  const onAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.files &&
      dispatch(uploadImage(event.currentTarget.files[0]));
  };

  const onRemoveUploadedImage = () => {
    file && dispatch(removeImage(file?.name));
  };

  const onRemoveAPIImage = () => {
    const name = company?.photos?.map((a) => a.name);
    name && dispatch(removeImage(name));
  };

  const loadDate = moment(new Date()).locale("ru").format("DD MMMM YYYY");

  return (
    <div className="block">
      <div className="block-title">
        <TitleItem title="приложенные фото" />
      </div>
      <div className="block-description">
        <div className="images">
          {company?.photos?.map((photo, idx) => {
            return (
              <div key={idx}>
                <ImageItem
                  onRemove={onRemoveAPIImage}
                  thumbpath={photo.thumbpath}
                  name={photo.name}
                  date={loadDate}
                />
              </div>
            );
          })}
          {file && (
            <ImageItem
              onRemove={onRemoveUploadedImage}
              thumbpath={file.thumbpath}
              name={file.name}
              date={loadDate}
            />
          )}
          <div> {error && <ErrorBlock />}</div>
          <div>{isLoading && <LoadingBlock />}</div>
        </div>
        <div className="loader">
          <ButtonAdd onAddImage={onAddImage} />
        </div>
      </div>
    </div>
  );
};
