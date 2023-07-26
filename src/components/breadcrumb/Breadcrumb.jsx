/* eslint-disable react/prop-types */
import { LinkContainer } from 'react-router-bootstrap'

import { Breadcrumb } from 'react-bootstrap'
const PageBreadcrumb = ({pagename}) => {
  return (
    <Breadcrumb>
    <LinkContainer to={"/dashboard"}>
        <Breadcrumb.Item>
           Home
        </Breadcrumb.Item>
    </LinkContainer>
        <Breadcrumb.Item active>
          {pagename}
        </Breadcrumb.Item>
      </Breadcrumb>
  )
}

export default PageBreadcrumb