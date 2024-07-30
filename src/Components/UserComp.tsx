import React, { useEffect, useState } from "react";
import { MdFilterList, MdKeyboardBackspace } from "react-icons/md";
import { AiOutlineMore } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import "../SCSS/styles.scss";

interface GuarantorType {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

interface DataType {
  _id: string;
  index: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber?: string;
  dateJoined?: string;
  monthlyIncome: string;
  status?: string;
  bvn: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  gender: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: GuarantorType[];
}

const UserComp: React.FC = () => {
  const [mockData, setMockData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [clickedProfile, setClickedProfile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const itemsPerPage = 9;

  useEffect(() => {
    if (localStorage.getItem("displayUser")) {
      setClickedProfile(true);
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/8ace0976-6058-4650-87b5-0a64df72579e"
        );
        const data = await response.json();
        setMockData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading Data</p>;
  }

  const handleUserData = (index: number) => {
    mockData.forEach((user) => {
      if (user.index === index) {
        localStorage.setItem("displayUser", JSON.stringify([user]));
        setClickedProfile(true);
      }
    });
  };

  const handleDropDown = (index: number) => {
    setActiveDropdownIndex(index === activeDropdownIndex ? null : index);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const goBack = () => {
    localStorage.removeItem("displayUser");
    setClickedProfile(false);
  };

  const displayUser = localStorage.getItem("displayUser");
  const users = displayUser ? JSON.parse(displayUser) : [];

  return (
    <div className="userComp">
      {clickedProfile && localStorage.getItem("displayUser") ? (
        <div className="userDisplay">
          <button style={{ display: "flex" }} onClick={goBack}>
            <MdKeyboardBackspace />
            back
          </button>
          {users.map((user: any) => (
            <div key={user.index}>
              <div className="userDetails">
                <div className="profileDetails">
                  <img src="userAvatar.svg" alt="" />
                  <h1>
                    {user.username} <small>{user._id}</small>
                  </h1>
                </div>
                <div className="usersTier">
                  <p>star</p>
                </div>
                <div className="accountDetails">
                  <p>
                    <FaNairaSign style={{ fontSize: "20px" }} />
                    {user.monthlyIncome}
                  </p>
                  <small>
                    {user.bvn}/{user.organization}
                  </small>
                </div>
                <ul className="details">
                  <li>General Details</li>
                  <li>Documents</li>
                  <li>Bank Details</li>
                  <li>Loans</li>
                  <li>Savings</li>
                  <li>App and System</li>
                </ul>
              </div>

              <div className="information">
                <p>Personal Information</p>
                <ul className="personal">
                  <li>
                    <span>FULL NAME</span>
                    <small>{user.username}</small>
                  </li>

                  <li>
                    <span>PHONE NUMBER</span>
                    <small>{user.phoneNumber}</small>
                  </li>

                  <li>
                    <span>Email ADDRESS</span>
                    <small>{user.email}</small>
                  </li>

                  <li>
                    <span>BVN</span>
                    <small>{user.bvn}</small>
                  </li>

                  <li>
                    <span>GENDER</span>
                    <small>{user.gender}</small>
                  </li>

                  <li>
                    <span>MARITAL STATUS</span>
                    <small>{user.maritalStatus}</small>
                  </li>

                  <li>
                    <span>CHILDREN</span>
                    <small>{user.children}</small>
                  </li>

                  <li>
                    <span>TYPE OF RESIDENCE</span>
                    <small>{user.typeOfResidence}</small>
                  </li>
                </ul>

                <p>Education and Employment</p>
                <ul className="education">
                  <li>
                    <span>LEVEL OF EDUCATION</span>
                    <small>{user.levelOfEducation}</small>
                  </li>

                  <li>
                    <span>EMPLOYMENT STATUS</span>
                    <small>{user.employmentStatus}</small>
                  </li>
                  <li>
                    <span>SECTOR OF EMPLOYMENT</span>
                    <small>{user.sectorOfEmployment}</small>
                  </li>
                  <li>
                    <span>DURATION OF EMPLOYMENT</span>
                    <small>{user.durationOfEmployment}</small>
                  </li>
                  <li>
                    <span>OFFICE EMAIL</span>
                    <small>{user.officeEmail}</small>
                  </li>
                  <li>
                    <span>MONTHLY INCOME</span>
                    <small>
                      <FaNairaSign style={{ fontSize: "12px" }} />
                      {user.monthlyIncome}
                    </small>
                  </li>
                  <li>
                    <span>LOAN REPAYMENT</span>
                    <small>
                      <FaNairaSign style={{ fontSize: "12px" }} />
                      {user.loanRepayment}
                    </small>
                  </li>
                </ul>
                <p>Socials</p>
                <ul className="socials">
                  <li>
                    <span>TWITTER</span>
                    <small>{user.twitter}</small>
                  </li>

                  <li>
                    <span>FACEBOOK</span>
                    <small>{user.facebook}</small>
                  </li>

                  <li>
                    <span>INSTAGRAM</span>
                    <small>{user.instagram}</small>
                  </li>
                </ul>
                <p>Guarantor</p>
                <ul className="guarantor">
                  {
                    user.guarantor
                      .map((person: any, idx: any) => (
                        <>
                          <li key={idx}>
                            <span>FULL NAME</span>
                            <small>{person.fullName}</small>
                          </li>
                          <li>
                            <span>PHONE NUMBER</span>
                            <small>{person.phoneNumber}</small>
                          </li>

                          <li>
                            <span>Email</span>
                            <small>{person.emailAddress}</small>
                          </li>
                          <li>
                            <span>RELATIONSHIP</span>
                            <small>{person.relationship}</small>
                          </li>
                        </>
                      ))
                      .splice(" ")[0]
                  }
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="userHolder">
          <div className="current">
            <div>
              <small>USERS</small>
              <p>{mockData.length}</p>
            </div>
            <div>
              <small>ACTIVE USERS</small>
              <p>{mockData.length}</p>
            </div>
            <div>
              <small>USERS WITH LOAN</small>
              <p>{mockData.length * 2}</p>
            </div>
            <div>
              <small>USERS WITH SAVINGS</small>
              <p>{(mockData.length * mockData.length) / 20}</p>
            </div>
          </div>

          <div className="tableHolder">
            <div className="table">
              <ul className="tableHead">
                <li>
                  ORGANIZATION <MdFilterList style={{ cursor: "pointer" }} />
                </li>
                <li>
                  USERNAME <MdFilterList style={{ cursor: "pointer" }} />
                </li>
                <li>
                  EMAIL <MdFilterList style={{ cursor: "pointer" }} />
                </li>
                <li>
                  PHONE NUMBER <MdFilterList style={{ cursor: "pointer" }} />
                </li>
                <li>
                  DATE JOINED <MdFilterList style={{ cursor: "pointer" }} />
                </li>
                <li>
                  STATUS <MdFilterList style={{ cursor: "pointer" }} />
                </li>
              </ul>
              {currentItems.map((data) => (
                <ul className="tableBody" key={data.index}>
                  <li>{data.organization}</li>
                  <li>{data.username}</li>
                  <li>{data.email}</li>
                  <li>{data.phoneNumber}</li>
                  <li>{data.dateJoined}</li>
                  <li className={data.status}>
                    <button>{data.status}</button>
                  </li>

                  <li>
                    <AiOutlineMore
                      onClick={() => handleDropDown(data.index)}
                      style={{ cursor: "pointer" }}
                    />
                    {activeDropdownIndex === data.index && (
                      <div className="moreDropDown">
                        <span onClick={() => handleUserData(data.index)}>
                          View User
                        </span>
                        <span>BlackList User</span>
                        <span>Activate User</span>
                      </div>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(mockData.length / itemsPerPage) },
              (_, i) => (
                <button key={i} onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComp;
