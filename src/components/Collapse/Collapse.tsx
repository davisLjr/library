import React from "react";
import {getIcon} from "../../utils/utils";

export interface CollapseProps {
  idCollapse?: string;
  isWhite?: boolean;
  itemsCollapse?: CollapseItemProps[];
}

export interface CollapseItemProps {
  id?: string;
  icon?: string;
  label?: string;
  title?: string;
  isTitleH4?: boolean;
  subtitle?: string;
  content?: React.ReactNode;
  children?: CollapseItems[] | CollapseInputs[];
  contentItems?: CollapseItems[];
  contentInputs?: CollapseInputs[];
}

export interface CollapseItems {
  label?: string;
  title?: string;
  subtitle?: string;
}

export interface CollapseInputs {
  icon?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  name?: string;
}
export default function Collapse(
  props: React.PropsWithChildren<CollapseProps>,
) {
  const {idCollapse, isWhite = false, itemsCollapse} = props;

  return (
    <div
      className={`accordion ${isWhite ? "accordion-white" : ""}`.trim()}
      {...(idCollapse ? {id: idCollapse} : {})}
    >
      {itemsCollapse &&
        itemsCollapse.map(
          (
            {
              id,
              title,
              isTitleH4 = false,
              icon,
              label,
              subtitle,
              content,
              contentItems,
              contentInputs,
            },
            index,
          ) => (
            <div className="card" key={index}>
              <button
                className={`card-header collapsed card-link ${
                  contentInputs || contentItems ? " card-info" : ""
                }`.trim()}
                data-toggle="collapse"
                data-target={"#" + id}
              >
                {icon && getIcon(icon)}
                {label && <span className="collapse-label">{label}</span>}
                {title && isTitleH4 ? (
                  <h4 className="collapse-title">{title}</h4>
                ) : (
                  title
                )}

                {subtitle && (
                  <span className="collapse-subtitle">{subtitle}</span>
                )}
              </button>
              <div
                id={id}
                className="collapse"
                {...(idCollapse ? {"data-parent": `#${idCollapse}`} : {})}
              >
                {content && <div className="card-body">{content}</div>}
                {contentItems && (
                  <div className="card-body">
                    {contentItems.map(({title, label, subtitle}, index) => (
                      <React.Fragment key={index}>
                        {label && (
                          <small className="text-success">{label}</small>
                        )}
                        {title && <h5 className="mb-0">{title}</h5>}
                        {subtitle && <small>{subtitle}</small>}
                        {index < contentItems.length - 1 && <hr />}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {contentInputs && (
                  <form className="card-body">
                    {contentInputs.map(
                      ({title, icon, subtitle, id, name}, index) => (
                        <React.Fragment key={index}>
                          <label className="card-details" htmlFor={id}>
                            {icon && getIcon(icon)}
                            <div className="card-details-content">
                              {title && <h5>{title}</h5>}
                              {subtitle && <small>{subtitle}</small>}
                            </div>
                            <input
                              type="radio"
                              className="form-radio"
                              name={name}
                              id={id}
                            />
                          </label>
                          {index < contentInputs.length - 1 && <hr />}
                        </React.Fragment>
                      ),
                    )}
                  </form>
                )}
              </div>
            </div>
          ),
        )}
    </div>
  );
}
