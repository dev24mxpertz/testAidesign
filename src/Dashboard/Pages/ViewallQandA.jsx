import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function ViewallQandA() {
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [editableIndex, setEditableIndex] = useState(null);
  const [originalQuestion, setOriginalQuestion] = useState("");
  const [originalAnswer, setOriginalAnswer] = useState("");
  const userId = useSelector((state) => state.auth.userId);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch question-answer pairs for the user
    fetch(`http://localhost:3000/questionanswers/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const extractedData = data.map((item) => item.data).flat();
        setQuestionAnswers(extractedData);
      })
      .catch((error) => {
        console.error("Failed to fetch question-answers:", error);
      });
  }, [userId]);

  const handleEdit = (index) => {
    setEditableIndex(index);
    // Save original values for cancel functionality
    setOriginalQuestion(questionAnswers[index].question);
    setOriginalAnswer(questionAnswers[index].answer);
  };

  const handleSave = async (index) => {
    const updatedQA = { ...questionAnswers[index] }; // Example: Update answer

    try {
      // Send PUT or PATCH request to update the question-answer pair
      const response = await fetch(
        `http://localhost:3000/questionanswers/${userId}/${updatedQA._id}`,
        {
          method: "PUT", // or 'PATCH' depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedQA),
        }
      );

      if (response.ok) {
        // Update the local state if the request is successful
        const updatedQuestionAnswers = [...questionAnswers];
        updatedQuestionAnswers[index] = updatedQA;
        setQuestionAnswers(updatedQuestionAnswers);
        console.log("Question-answer pair updated successfully");
        setEditableIndex(null); // Reset editable index after saving
      } else {
        const responseData = await response.json(); // Get the response data
        if (
          response.status === 400 &&
          responseData.message === "Duplicate question-answer pair found"
        ) {
          // Handle the case where a duplicate was found
          console.error(
            "Duplicate question-answer pair found:",
            responseData.message
          );
          toast.error(responseData.message);
        } else {
          console.error(
            "Failed to update question-answer pair:",
            response.statusText
          );
        }
      }
    } catch (error) {
      console.error("Failed to update question-answer pair:", error);
    }
  };

  const handleCancel = (index) => {
    // Restore original values
    const updatedQuestionAnswers = [...questionAnswers];
    updatedQuestionAnswers[index].question = originalQuestion;
    updatedQuestionAnswers[index].answer = originalAnswer;
    setQuestionAnswers(updatedQuestionAnswers);
    setEditableIndex(null); // Reset editable index
  };

  const handleDelete = async (index) => {
    if (
      window.confirm(
        "Are you sure you want to delete this question-answer pair?"
      )
    ) {
      try {
        // Call the delete API endpoint
        const response = await fetch(
          `http://localhost:3000/questionanswers/${userId}/${questionAnswers[index]._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          // Remove the pair from the local state if the request is successful
          const updatedQuestionAnswers = [...questionAnswers];
          updatedQuestionAnswers.splice(index, 1);
          setQuestionAnswers(updatedQuestionAnswers);
          console.log("Deleted question-answer pair successfully");
        } else {
          console.error(
            "Failed to delete question-answer pair:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Failed to delete question-answer pair:", error);
      }
    }
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/dashboard/Modal");
  };

  const filteredQuestionAnswers = questionAnswers.filter(
    (qa) =>
      qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <Button className="dashboard-btn mb-3" onClick={back}>
            Back
          </Button>
          <input
            type="text"
            placeholder="Search by name or email"
            style={{ fontSize: "16px" }}
            className="usersearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="allqa-box">
          {/* Display the question-answer pairs */}
          {filteredQuestionAnswers.map((qa, index) => (
            <div key={index} className="row mb-3 align-items-end">
              <div className="col">
                <h6 style={{ color: "black" }}>Question</h6>
                <input
                  type="text"
                  value={qa.question}
                  onChange={(e) => {
                    if (editableIndex === index) {
                      const updatedQuestionAnswers = [...questionAnswers];
                      updatedQuestionAnswers[index].question = e.target.value;
                      setQuestionAnswers(updatedQuestionAnswers);
                    }
                  }}
                  disabled={editableIndex !== index}
                  className={`chat-input-qalist bg-transparent ${
                    editableIndex === index ? "" : "chat-input-qalist "
                  }`}
                />
              </div>
              <div className="col">
                <h6 style={{ color: "black" }}>Answer</h6>
                <input
                  type="text"
                  value={qa.answer}
                  onChange={(e) => {
                    if (editableIndex === index) {
                      const updatedQuestionAnswers = [...questionAnswers];
                      updatedQuestionAnswers[index].answer = e.target.value;
                      setQuestionAnswers(updatedQuestionAnswers);
                    }
                  }}
                  disabled={editableIndex !== index}
                  className={`chat-input-qalist bg-transparent ${
                    editableIndex === index ? "" : "chat-input-qalist "
                  }`}
                />
              </div>
              <div className="col-auto">
                {editableIndex !== index ? (
                  <button className="btn " onClick={() => handleEdit(index)}>
                    <img
                      style={{ filter: "invert(1)" }}
                      src={require("../../Assets/images/Edit.png")}
                      alt=""
                    />
                  </button>
                ) : (
                  <div>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleSave(index)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleCancel(index)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="col-auto">
                <button className="btn " onClick={() => handleDelete(index)}>
                  <img src={require("../../Assets/images/Delete.png")} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewallQandA;
