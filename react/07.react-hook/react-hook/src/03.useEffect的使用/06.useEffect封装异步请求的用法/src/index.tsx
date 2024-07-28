import React, { useState, useEffect, useReducer, useCallback } from "react";
import ReactDOM from "react-dom";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";
import { Spin, Tabs } from "antd";
import { fetchTodos, toggleTodo } from "./api";
import { useRequest, useWithLoading } from "./hook";

import "antd/dist/antd.css";
import "./styles/styles.css";
import "./styles/reset.css";

const { TabPane } = Tabs;

const TAB_ALL = "all";
const TAB_FINISHED = "finished";
const TAB_UNFINISHED = "unfinished";
const tabMap = {
  [TAB_ALL]: "全部",
  [TAB_FINISHED]: "已完成",
  [TAB_UNFINISHED]: "待完成"
};

function App() {
  const [activeTab, setActiveTab] = useState(TAB_ALL);

  // 数据获取逻辑
  const [query, setQuery] = useState("");
  const {
    data: { result: todos = [] },
    loading: listLoading
  } = useRequest(() => {
    return fetchTodos({ query, tab: activeTab });
  }, [query, activeTab]);

  // placeHolder
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    setPlaceholder(`在${tabMap[activeTab]}内搜索`);
  }, [activeTab]);

  // 完成todo逻辑
  const { func: onToggleFinished, loading: toggleLoading } = useWithLoading(
    async id => {
      await toggleTodo(id);
    }
  );

  const loading = !!listLoading || !!toggleLoading;

  return (
    <>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL} />
        <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED} />
        <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED} />
      </Tabs>
      <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        <TodoInput placeholder={placeholder} onSetQuery={setQuery} />
        <Spin spinning={loading} tip="稍等片刻~">
          <TodoList todos={todos} onToggleFinished={onToggleFinished} />
        </Spin>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
