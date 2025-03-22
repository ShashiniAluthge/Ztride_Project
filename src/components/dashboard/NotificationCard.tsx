import DoubleArrowIcon from "../../assets/doubleArrowIcon.png";
import RectangleIcon from "../../assets/rectangleIcon.png";

const notificationData = [
  {
    notification: `John Doe has requested an upgrade to their account from Basic Plan
            to Premium Plan. Verify the user's eligibility and...`,
  },
  {
    notification: [
      `A new demo request has been received from Sarah Johnson. Email: sarah.@example.com, 
                   Company: Johnson Tech Solutions...`,
      `Emily Brown has suggested a new FAQ entry. Suggested FAQ: 'How do I reset my password?'...`,
      `A new subscription has been made to the Pro Plan pricing plan. User: Michael Smith, Email: michael.smith@example.com...
                   `,
    ],
  },
];

const NotificationCard = () => {
  return (
    <div className="mt-[27px]  border-1 border-[#F9F8F8] rounded-[20px] w-1/3">
      <div className="ml-[24px] m-[8px]">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-[13px] text-[var(--subText)]">This Week</p>
            <p className="text-[16px] font-medium text-[var(--primary)]">
              Notification
            </p>
          </div>
          <img src={DoubleArrowIcon} alt="Expand" />
        </div>
        <div className="flex flex-col text-[12px] text-[var(--subText)] ">
          {notificationData.map((item, index) => (
            <div key={index} className="flex flex-col">
              {Array.isArray(item.notification) ? (
                <div className="flex flex-row mt-[20px] border-[#F9F8F8]">
                  <img src={RectangleIcon} className="w-[12px] h-[12px]" />
                  <div className="flex flex-col">
                    {item.notification.map((text, i) => (
                      <p
                        key={i}
                        className={`flex flex-row ml-[8px] ${
                          i !== 0 ? "mt-[16px]" : ""
                        }`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-row border-[#F9F8F8] mt-[20px]">
                  <img src={RectangleIcon} className="w-[12px] h-[12px]" />
                  <p className="ml-[8px]">{item.notification}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
