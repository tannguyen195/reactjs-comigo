import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Router } from 'routes'

import * as searchAction from '../../actions/search'
import * as projectAction from '../../actions/project'
import * as peopleAction from '../../actions/people'
import Head from '../head'
import Search from './Search'
import _search from './_search.less'
class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
       
        const { getPeopleList, getList, search } = this.props
        let params = Router.router.query.key.replace(/-/g, ' ')
        
        search({
            data: params,
            type: "search"
        })
        if (Router.router.query.skill !== "true")
            getPeopleList({
                data: params,
                type: "search"
            })
    }
    render() {

        return (
            <div style={{ height: '100%' }}>
                <style dangerouslySetInnerHTML={{
                    __html: _search
                }} />
                <Head title="Search" />
                <Search

                    {...this.state}
                    {...this.props}

                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        searchSkillResult: state.search.searchSkillResult,
        status: state.search.status,
        peopleSearch: state.people.peopleSearch,
        searchResult: state.search.searchResult
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...searchAction,
        ...projectAction,
        ...peopleAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SearchContainer));
