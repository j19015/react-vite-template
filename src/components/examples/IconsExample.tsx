import {
  Home,
  User,
  Settings,
  Mail,
  Bell,
  Search,
  Heart,
  Star,
  Download,
  Upload,
  Check,
  X,
  AlertCircle,
  Info,
  ChevronRight,
  Calendar,
} from "lucide-react";
import * as styles from "./IconsExample.css";

export default function IconsExample() {
  const icons = [
    { Icon: Home, name: "Home" },
    { Icon: User, name: "User" },
    { Icon: Settings, name: "Settings" },
    { Icon: Mail, name: "Mail" },
    { Icon: Bell, name: "Bell" },
    { Icon: Search, name: "Search" },
    { Icon: Heart, name: "Heart" },
    { Icon: Star, name: "Star" },
    { Icon: Download, name: "Download" },
    { Icon: Upload, name: "Upload" },
    { Icon: Check, name: "Check" },
    { Icon: X, name: "X" },
    { Icon: AlertCircle, name: "Alert" },
    { Icon: Info, name: "Info" },
    { Icon: ChevronRight, name: "Chevron" },
    { Icon: Calendar, name: "Calendar" },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Lucide React Icons</h3>
      <div className={styles.grid}>
        {icons.map(({ Icon, name }) => (
          <div key={name} className={styles.iconCard}>
            <Icon size={32} className={styles.icon} />
            <span className={styles.iconName}>{name}</span>
          </div>
        ))}
      </div>
      <div className={styles.examples}>
        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>Different Sizes</h4>
          <div className={styles.sizeExamples}>
            <Heart size={16} />
            <Heart size={24} />
            <Heart size={32} />
            <Heart size={48} />
          </div>
        </div>
        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>Different Colors</h4>
          <div className={styles.colorExamples}>
            <Star size={32} color="#ef4444" fill="#ef4444" />
            <Star size={32} color="#10b981" fill="#10b981" />
            <Star size={32} color="#3b82f6" fill="#3b82f6" />
            <Star size={32} color="#f59e0b" fill="#f59e0b" />
          </div>
        </div>
      </div>
    </div>
  );
}
