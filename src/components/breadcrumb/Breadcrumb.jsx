/* eslint-disable react/prop-types */

import { Breadcrumb } from 'react-bootstrap'
const PageBreadcrumb = ({pagename}) => {
  return (
    <Breadcrumb>
        <Breadcrumb.Item href="/">
           Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {pagename}
        </Breadcrumb.Item>
      </Breadcrumb>
  )
}

export default PageBreadcrumb